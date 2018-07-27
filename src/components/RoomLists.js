import React, { Component } from 'react';
import * as firebase from 'firebase';

class RoomList extends Component {
  constructor(props) {
     super(props)
     this.state = { firebase: firebase };

     this.state = { rooms: []};

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

   componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          //console.log(snapshot);
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({rooms: this.state.rooms.concat( room )})
        });
      }
      
  render() {
    return (
      <div className="RoomList">
      <ul>
      { this.state.rooms.map( (room, index) => (
        //<li> {room.name} </li>
        <li key={index}> {room.name} </li>
        ))}
        </ul>
      </div>
      )}
    //)
  }

  export default RoomList
