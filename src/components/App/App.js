import React, { Component } from 'react';
import Profile from './../Profile/Profile';
import About from './../About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='box left'><Profile/></div>
        <div className='box right'><About/></div>
      </div>
    );
  }
}

export default App;
