import React, { Component } from 'react';
import Tabslist from './../Tablist/Tablist';
import './Tabdetail.css';

class Tabdetail extends Component {
  render() {
    if (!this.props.tab) {
      return <div>Loading...</div>
    }
    return (
      <div className='detail'>
        {this.props.tab.detail}
      </div>
    );
  }
}

export default Tabdetail;
