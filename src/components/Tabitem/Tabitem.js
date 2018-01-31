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
      <div
        className={this.props.selectedTab === this.props.tab ? 'nav-item lol' : 'nav-item'}
        onClick={this.handleClick}
      >
        {tabItem}
      </div>
    );
  }
}

export default Tabitem;
