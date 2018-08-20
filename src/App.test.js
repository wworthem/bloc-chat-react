import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//old firebase initialze code....before 8/17
var config = {
  apiKey: "AIzaSyDRC_exg-UWG3gWKeAF7PTvULJLLYKODrA",
  authDomain: "bloc-chat-d02a4.firebaseapp.com",
  databaseURL: "https://bloc-chat-d02a4.firebaseio.com",
  projectId: "bloc-chat-d02a4",
  storageBucket: "bloc-chat-d02a4.appspot.com",
  messagingSenderId: "356550783825"
};
