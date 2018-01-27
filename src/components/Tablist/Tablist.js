import React, { Component } from 'react';
import Tabitem from './../Tabitem/Tabitem';
import './Tablist.css';

class Tablist extends Component {
  render() {
    const tabItems = this.props.tabs.map((tab) => {
      return <Tabitem
        onTabSelect={this.props.onTabSelect}
        tab={tab}
        key={tab.key} />
    })
    return (
      <div className='nav nav-pills nav-fill'>
        {tabItems}
      </div>
    );
  }
}

export default Tablist;
