import React, { Component } from 'react';
// eslint-disable-next-line
import * as firebase from 'firebase';

class RoomList extends Component {
  constructor(props) {
     super(props)


     this.state = {
       value: "",
       newRoomName: "",
       rooms: []
     };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    //this.createRoom = this.createRoom.bind(this);
  }

   createRoom=(event)=> {
       event.preventDefault()

       var textInput= document.getElementById("roomInput");
       var newRoomName = textInput.value;
       textInput.value ="";
       this.roomsRef.push({
         name: newRoomName
        });

   }

   componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          //console.log(snapshot);
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({rooms: this.state.rooms.concat( room )})
        });
      }

      handleChange(event) {

        this.setState({})
      }

  render() {
      return (

      <div>
        <div className="RoomList">
          <ul>
            { this.state.rooms.map( (room, index) =>
              (
                //<li> {room.name} </li>
                <li key={index}> {room.name} </li>
              ))
           }
          </ul>
        </div>

        <form onSubmit= {this.createRoom}>
          <label for="room">Enter Room Name </label>
          <input id="roomInput" type="text" name="roomName" placeholder="enter room name" />
          <input type="submit" value="Submit" onSubmit={(event)=>this.createRoom(event)} />

        </form>

      </div>
      )}
    //)

  }


  export default RoomList
