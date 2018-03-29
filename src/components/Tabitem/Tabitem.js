import React, { Component } from 'react';
import './Tabitem.css';

class Tabitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    this.props.onTabSelect(this.props.tab);
  }
  render() {
    const tabItem = this.props.tab.title;
    return (
      <div className='tabbar'>
        <div
          className={this.props.selectedTab === this.props.tab ? 'nav-item selected' : 'nav-item'}
          onClick={this.handleClick}
        >
          {tabItem}
        </div>
        <div className={this.props.selectedTab === this.props.tab ? 'sline' : 'line'}></div>
      </div>
    );
  }
}

export default Tabitem;
