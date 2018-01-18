import React, { Component } from 'react';
import './About.css';
import Tabs from 'react-tabs-navigation';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Tabs
          lineStyle={{
            backgroundColor: 'green',
            height: '4px',
            transition: 'margin-left 0.5s cubic-bezier(0.15, 0.48, 0.42, 1.13)'
          }}
          selectedTabStyle={{
            backgroundColor: '#ffffff',
          }}
          tabsStyle={{
            backgroundColor: '#DADADC',
            transition: 'all 0.5s ease-in-out',
            ':focus': {
              outline: 'none',
              boxShadow: 'none'
            },
            'hover': {
              backgroundColor: '#000000'
            }
          }}
          tabsBarStyle= {{
            height: '50px',
            fontSize: '15px',
            fontWeight: '300',
          }}
          tabs={[
            {
              children: () => (
                <div className='tab one'>
                  <div className='title'>About Me</div>
                    <ul>
                    </ul>
                  <div className='title'>Education</div>
                  <ul>
                    <li> University of California, Riverside </li>
                     <ul>
                      <li> B.S. Computer Science</li>
                      <li>Expected June 2018</li>

                    </ul>
                  </ul>
                </div>
              ),
              displayName: 'About Me',
            },
            {
              children: () => (
                <div className= 'tab two'>
                  <div className='title'>Languages</div>
                  <ul>
                    <li>HTML/CSS/Javascript</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Excel VBA</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>Git</li>
                  </ul>
                  <div className='title'>Frameworks and Libraries</div>
                  <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                    <li>JQuery</li>
                    <li>Sass</li>
                    <li>Selenium</li>
                  </ul>
                  <div className='title'>Other</div>
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Unity</li>
                    <li>Latex</li>
                    <li>Firebase</li>
                    <li>Arduino</li>
                  </ul>
                  <div className='title'>Coursework</div>
                  <ul>
                    <li>Object Oriented Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Machine Learning</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              ),
              displayName: 'Skills'
            },
            {
              displayName: 'Projects',
              children: () => (
                <div className='tab three'>
                  <div className='title'>PostPin</div>
                  <ul>
                    <li>Created a Multi-page web app which provides College students a platform to Buy/Sell/Trade</li>
                    <li> Made using good practices: collaborators made pull requests, Kanban board to organize tasks, weekly meetings</li>
                    <li>Built using: ReactJS, Sass, Bootstrap, Firebase, and Webpack</li>
                  </ul>
                  <div className='title'>Website</div>
                  <ul>
                    <li>Made personal website using ReactJS</li>
                    <li>Gained familiarity with Flexbox, animations, and React</li>
                  </ul>
                  <div className='title'>LED Game</div>
                  <ul>
                    <li>Created an asteroid dodging game on a 32x32 LED Board</li>
                    <li>Used USART communication between the Arduino and Atmega</li>
                    <li>Built using: Arduino, Atmega1284, LCD Screen for the score, 32x32 LED Board for display, and joystick for movement</li>
                  </ul>
                  <div className='title'>Tanks</div>
                  <ul>
                    <li>Created a 2 player real-time tank game using Unity and EA Pathfinders API</li>
                    <li>Made during Hackpoly 2016, won the EA Pathfinders prize</li>
                    <li>The EA Pathfinders API allowed us to use a smartphone as a controller for the game</li>
                  </ul>
                </div>
              ),
            },
            {
              displayName: 'Experience',
              children: () => (
                <div className='tab four'>
                  <div className='title'>Center for Environmental Research and Technology</div>
                    <ul>
                      <li>Managed the solar energy website which uses PHP and SQL</li>
                      <li>Reduced workload for researchers by creating Excel VBA Macros</li>
                      <li>Excel VBA Macros transferred and analyzed energy data and made multiple graphs and calculations from it</li>
                    </ul>
                </div>
              ),
            }
          ]}
        />
      </div>
    )
  }
}
export default About;
