import React, { Component } from 'react';
import * as firebase from 'firebase';
//import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomLists';

//<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

  // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyBPvjn_VEeTuvOiXnsjAZCOuzgBrJY1i7U",
    authDomain: "wwbloc-chat.firebaseapp.com",
    databaseURL: "https://wwbloc-chat.firebaseio.com",
    projectId: "wwbloc-chat",
    storageBucket: "wwbloc-chat.appspot.com",
    messagingSenderId: "124344217648"
  };

  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
      };
}

  render() {
    return (
      <div className="App">

        <div className="Room-List">
          <RoomList firebase = {firebase}/>
        </div>
      </div>
    );
  }
}

export default App;
