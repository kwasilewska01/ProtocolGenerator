import React, { Component } from 'react';
import './PeopleList.scss';
import security from '../../images/icons/security.svg';
import arrow from '../../images/icons/arrow_drop_down.svg';
import edit from '../../images/icons/edit.svg';
import cancel from '../../images/icons/cancel.svg';


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

        <div className="content w-100">
            <div className= "col-12">
            <div className="row titleMenu">DASHBORD</div>
            <div className="row no-wrap mb-5">
                <h2>The Settlement Data System</h2>
                <img className ="protect_icon" src={security} alt="seciurity"></img>
            </div>
                    
            <div className="row pb-3">
                <div className="list-group list-group-menu col-3">
                    <p>Firma</p>
                    <img className ="filtr_icon-list" src={arrow} alt="arrow"></img>
                </div>
                <div className="list-group list-group-menu col-4">
                    <p>Adres</p>
                    <img className ="filtr_icon-list" src={arrow} alt="arrow"></img>
                </div>
                <div className="list-group list-group-menu col-3">
                    <p>Numer kontraktu</p>
                    <img className ="filtr_icon-list" src={arrow} alt="arrow"></img>
                </div>
                <div className="list-group list-group-menu col-2">
                    <p>Akcje</p>
                </div>
            </div>

            <div className="row">
                <ul className="list-group list-group-flush w-100">
                    {this.state.data.map( (item) => (
                        <li key={item.name} className="list-group-item d-flex">
                            <div className="col-3">{item.name}</div>
                            <div className="col-4">{item.address}</div>
                            <div className="col-3">{item.contractNumber}</div>
                            <div className="col-2">
                                <img className ="filtr_icon-list mr-2 cursor color-grey " src={edit} alt="edit"></img>
                                <img className ="filtr_icon-list color-red cursor" src={cancel} alt="cancel"></img>
                            </div>
                        </li>
                    ))}  
                </ul>
            </div>
        </div>
        </div>
        );
    }
}