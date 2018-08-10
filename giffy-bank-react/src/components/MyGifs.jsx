// Section of code from previous version of the project (Alex)

// import React from 'react';
//
// const MyGifs = (props) => {
//     console.log(props);
//     const gifsList = props.gifs.map((gif) => {
//         return (
//             <div>
//                 <img src={gif.url} />
//                 <h3>{gif.description}</h3>
//             </div>
//         )
//     })
//     return (
//         <div>
//             <h1>This is MyGifs Page</h1>
//             {gifsList}
//         </div>
//     );
// }
//
// export default MyGifs;

// This is the section of code written by Michael

import React, { Component } from 'react';

class MyGifs extends Component {
  constructor(){
    super();

    this.state = {
      myGifs: []
    }
  }

  componentDidMount() {

      this.getMyGifs().then((myGifs) => {
          this.setState({ myGifs: myGifs.data })
      }).catch((err) => {
        console.log(this.state.myGifs, 'this is myGifs');
        console.log(this.state.myGifs.data);
          console.log(err);
      })
  }

  getMyGifs = async () => {

      const myGifs = await fetch('http://localhost:9000/api/v1/gifs', {
          credentials: 'include',
          method: 'GET'
      });
      const myGifsJson = await myGifs.json();
      return myGifsJson
  }

  handleDelete = async (itemToBeDeleted) => {
    console.log(itemToBeDeleted, " this is the state in handleDelete")
    console.log(this.state, " this is the state in handleDelete")
      let newGifs = this.state.myGifs.filter((_gif) => {
        console.log(_gif, " this is _gif")
        return _gif !== itemToBeDeleted
      });
      this.setState({myGifs: newGifs});
      console.log(newGifs, " this is newGifs");

      // send request to database to permanently delete the item to be deleted
      async (id, e) => {
          console.log(id, ' this is id')
          e.preventDefault();
          try {
              const deleteGif = await fetch('http://localhost:9000/api/v1/gifs/' + id, {
                  credentials: 'include',
                  method: 'DELETE'
              });
              console.log('inside try')
              const deleteGifJson = await deleteGif.json();
              console.log(deleteGifJson);
              //
              // // reset the state of the gifs array without the
              // // item to be deleted by ID
              // this.setState({ gifs: this.state.gifs.filter((gif, i) => gif._id !== id) });

          } catch (err) {
              console.log(err, ' error')
          }

      }
      console.log("Here WE ARE!")
    }

    render() {
      const myGifsList = this.state.myGifs.map((gif, _id) => {
        console.log(gif, ' HERE is this gif');
        return (
            <div>
              <img src= {gif.url} />
              <h3>{this.state.myGifs.description}</h3>
              <button onClick={this.handleDelete.bind(this, gif)} >Delete</button>
            </div>
        )
      })
      return (
          <div>
              <h1>This is MyGifs Page</h1>
              {myGifsList}
          </div>
      );

    }
}

export default MyGifs;
