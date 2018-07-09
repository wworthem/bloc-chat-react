import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomLists';


<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRC_exg-UWG3gWKeAF7PTvULJLLYKODrA",
    authDomain: "bloc-chat-d02a4.firebaseapp.com",
    databaseURL: "https://bloc-chat-d02a4.firebaseio.com",
    projectId: "bloc-chat-d02a4",
    storageBucket: "bloc-chat-d02a4.appspot.com",
    messagingSenderId: "356550783825"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="Room-List">
          <RoomList/>
        </p>
      </div>

    );
  }
}


export default App;
