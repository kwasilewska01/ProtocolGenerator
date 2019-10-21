import React, { Component } from 'react';

export default class company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      company: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/company")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            company: result.itcompanyems
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, company } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {company.map(company => (
            <li key={company.name}>
              {company.name} {company.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
