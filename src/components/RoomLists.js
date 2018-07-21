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
      { this.state.rooms.map( (room, index) => (
        <p> {room.name} </p>
        ))}
      </div>
      )}
    //)
  }

  export default RoomList
