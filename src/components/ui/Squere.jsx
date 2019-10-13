import React, { Component } from 'react';
// import './Collapse.scss';

export default class Squere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabText = tabText,
            tabIcon= tabIcon,
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
        <span>{this.state.tabText}</span>
        <span>{this.state.tabIcon}</span>
    </a>
  )
}
}