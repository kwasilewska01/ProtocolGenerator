import React, { Component } from 'react';
import PropTypes from "prop-types";

// export default class SingleCompany extends Component {
  
  export default function SingleCompany(props) {
    return (
      <div>
      <span>{props.name}</span>
    </div>
    ); 
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};