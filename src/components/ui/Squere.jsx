import React, { Component } from 'react';
// import './Collapse.scss';

export default class Squere extends Component {
  constructor(props) {
    super(props);
      this.state = {
          tabText:"",
          tabIcon:"",
      };
    }

  render(){
    return (
      <a 
        className={"nav-link" + (this.state.isActive ? "active" : "")}  
        data-toggle="pill" 
        href="#v-pills-home" 
        role="tab" 
        aria-selected={(this.state.isBooleanActive ? "true" : "")}
      >
        <img className="dblock nav_icon" src={this.props.tabIcon} alt={this.props.alt}></img>
        <span className="dblock">{this.props.tabText}</span>
      </a>
    )
  }
}