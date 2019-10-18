import React, { Component } from 'react';
import './PeopleList.scss';
import security from '../../images/icons/security.svg'


export default class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/company")
        .then( res => res.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
    }

    render(){

        console.log(this.state.data);
        if (!this.state.data) {
            return (
                <div>Loading...</div>
            )
        }

    return (

        <div className="content">
            <div className="row titleMenu">DASHBORD</div>
            <div className="row no-wrap">
                <h2>The Settlement Data System</h2>
                <img className ="protect_icon" src={security} alt="seciurity"></img>
            </div>
                    
            <div className="row">
                <ul className="list-group list-group-flush">
                    {this.state.data.map( (item) => (
                        <li key={item.name} className="list-group-item">{item.name}</li>
                    ))} 
                    
                </ul>
            </div>
        </div>
        );
    }
}