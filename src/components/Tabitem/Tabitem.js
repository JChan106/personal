import React, { Component } from 'react';
import './Tabitem.css';

class Tabitem extends Component {
  render() {
    return (
      <div className='nav-item' onClick={() => this.props.onTabSelect(this.props.tab)}>
        {this.props.tab.title}
      </div>
    );
  }
}

export default Tabitem;
