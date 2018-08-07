import React, { Component } from 'react';
import GifList from './GifList';
import CreateGif from './CreateGif';
import EditGif from './EditGif';
import request from 'superagent';


class GifsContainer extends Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            showEdit: false,
            editGifId: null,
            gifToEdit: {
                url: '',
                description: ''
            },
            gifSearch: {
                search: ''
            }
        }
    }
    componentDidMount() {
        this.getGifs().then((gifs) => {
            this.setState({ gifs: gifs.data })
        }).catch((err) => {
            console.log(err);
        })
    }
    getGifs = async () => {

        const gifs = await fetch('http://localhost:9000/api/v1/gifs', {
            credentials: 'include',
            method: 'GET'
        });
        const gifsJson = await gifs.json();
        return gifsJson

    }
    addGif = async (gif, e) => {
        e.preventDefault();
        try {
            const createdGif = await fetch('http://localhost:9000/api/v1/gifs', {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(gif),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const createdGifJson = await createdGif.json();
            this.setState({ gifs: [...this.state.gifs, createdGifJson.data] });

        } catch (err) {
            console.log(err)
        } console.log('credentials');


    }
    deleteGif = async (id, e) => {
        console.log(id, ' this is id')
        e.preventDefault();
        try {
            const deleteGif = await fetch('http://localhost:9000/api/v1/gifs/' + id, {
                credentials: 'include',
                method: 'DELETE'
            });
            console.log('inside try')
            const deleteGifJson = await deleteGif.json();
            this.setState({ gifs: this.state.gifs.filter((gif, i) => gif._id !== id) });

        } catch (err) {
            console.log(err, ' error')
        }


    }
    showModal = (id, e) => {
        // i comes before e, when called with bind
        const gifToEdit = this.state.gifs.find((gif) => gif._id === id)
        console.log(gifToEdit, ' gifToEdit')
        this.setState({
            credentials: 'include',
            showEdit: true,
            editGifId: id,
            gifToEdit: gifToEdit
        });
    }
    closeAndEdit = async (e) => {
        e.preventDefault();

        try {
            const editResponse = await fetch('http://localhost:9000/api/v1/gifs/' + this.state.editGifId, {
                credentials: 'include',
                method: 'PUT',
                body: JSON.stringify(this.state.gifToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const editResponseJson = await editResponse.json();

            const editedGifArray = this.state.gifs.map((gif) => {

                if (gif._id === this.state.editGifId) {

                    gif.url = editResponseJson.data.url;
                    gif.description = editResponseJson.data.description;
                }

                return gif
            });

            this.setState({
                gif: editedGifArray,
                showEdit: false
            });



        } catch (err) {
            console.log(err);
        }

    }
    handleFormChange = (e) => {
        this.setState({
            gifToEdit: {
                ...this.state.gifToEdit,
                [e.target.name]: e.target.value
            },
        })
    }
    handleTermChange = (e) => {
        this.setState({
            gifSearch: {
                ...this.state.gifSearch,
                [e.target.name]: e.target.value
            }
        })
        const term = e.target.value
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <CreateGif addGif={this.addGif} gifSearch={this.state.gifSearch} handleTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} deleteGif={this.deleteGif} showModal={this.showModal} />
                {this.state.showEdit ? <EditGif closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} gifToEdit={this.state.gifToEdit} /> : null}
            </div>
        )
    }
}

export default GifsContainer;