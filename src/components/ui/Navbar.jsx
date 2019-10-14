import React, { Component } from 'react';

export default class Collapse extends Component {
    render(){
    return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-brand">Navbar</div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                </nav>
            </div>
        );
    }
}