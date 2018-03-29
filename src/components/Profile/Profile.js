import React, { Component } from 'react';
import './Profile.css'

const Profile = (props) => {
  return (
    <div className="dropdown-content">
      <a href="resume.pdf"><img className="l resume" src="r2.png" width="15" height="20"></img></a>
      <a href="mailto:jackisivchan@gmail.com" ><img className="l email" src="email.png" width="20" height="20"></img></a>
      <a href="https://www.linkedin.com/in/jackiesivchan/" ><img className="l linkedin" src="li.png" width="20" height="20"></img></a>
      <a href="https://github.com/JChan106"><img className="l github" src="Octocat.png" width="25" height="20"></img></a>
    </div>
  );
}

export default Profile;
