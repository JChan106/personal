import React, { Component } from 'react';
import Profile from './../Profile/Profile';
import Tabdetail from './../Tabdetail/Tabdetail';
import Tablist from './../Tablist/Tablist';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.data,
      selectedTab: null,
    }
  }

  componentDidMount () {
    this.setState({
      selectedTab: this.state.tabs[0]
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='box left'><Profile/></div>
        <div className='box right'>
          <Tablist
            tabs={this.state.tabs}
            onTabSelect={selectedTab => this.setState({selectedTab})}
          />
          <Tabdetail tab={this.state.selectedTab}/>
        </div>
      </div>
    );
  }
}

export default App;
