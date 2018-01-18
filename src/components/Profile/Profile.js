import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
  render() {
    return (
      <div className="me">
        <img className="pic" src='p2.jpg' alt="personal of Jackie"/>
        <div className= "name">Jackie S. Chan</div>
        <div className="links">
          <a href="" className="l resume">Resume</a>
          <a href="" className="l email">Email</a>
          <a href="" className="l linkedin">Linkedin</a>
          <a href="" className="l github">Github</a>
        </div>
      </div>
    );
  }
}

export default Profile;
