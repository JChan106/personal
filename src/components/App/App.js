import React, { Component } from 'react';
import Profile from './../Profile/Profile';
import Tabdetail from './../Tabdetail/Tabdetail';
import Tablist from './../Tablist/Tablist';
// import Granim from 'react-granim';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.data,
      selectedTab: null,
      showInfo: false,
    }
    this.handlePress = this.handlePress.bind(this);
  }
  componentDidMount () {
    this.setState({
      selectedTab: this.state.tabs[0],
    })
  }
  handlePress() {
    this.setState({
      showInfo: !this.state.showInfo,
    });
    console.log(this.state.showInfo);
  }

  render() {
    return (
      <div className='container'>
        <div className='main'>
          <div className='spacer'></div>
          <div className={this.state.showInfo ? 'name left' : 'name center'}>
            <img className={this.state.showInfo ? 'pic pappear' : 'pic phide'}src="p2.jpg"></img>
            <div className="dropdown">
              <a style={{color: 'white'}} onClick={this.handlePress} className="btn-3d red">JACKIE CHAN</a>
              <Profile/>
            </div>
          </div>
          <div className={this.state.showInfo ? 'info show' : 'info hide'}>
            {<Tablist
              tabs={this.state.tabs}
              onTabSelect={selectedTab => this.setState({selectedTab})}
              selectedTab={this.state.selectedTab}
            />}
            {<Tabdetail tab={this.state.selectedTab}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
