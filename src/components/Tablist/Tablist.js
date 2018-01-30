import React, { Component } from 'react';
import Tabitem from './../Tabitem/Tabitem';
import './Tablist.css';

class Tablist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    const tabItems = this.props.tabs.map((tab) => {
      return <Tabitem
        onTabSelect={this.props.onTabSelect}
        tab={tab}
        key={tab.key}
        selectedTab={this.props.selectedTab}
        />
    })
    return (
      <div className='nav nav-pills nav-fill'>
        {tabItems}
      </div>
    );
  }
}

export default Tablist;
