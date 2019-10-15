import React, { Component } from 'react';
import './PeopleList.scss';
import security from '../../images/icons/security.svg'


export default class PeopleList extends Component {
    render(){
    return (

        <div className="content">
            <div className="row titleMenu">DASHBORD</div>
            <div className="row no-wrap">
                <h2>The Settlement Data System</h2>
                <img className ="protect_icon" src={security} alt="seciurity"></img>
            </div>
                    
            <div className="row">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio  qw ewe  wdaed wa</li>
                    <li className="list-group-item">Dapibus ac facilisis in  a ww   aw edaw wa  awed aw</li>
                    <li className="list-group-item">Morbi leo risus  awe aw   aw wd w   wwd  </li>
                    <li className="list-group-item">Porta ac consectetur ac wa d  wad d w dwad d</li>
                    <li className="list-group-item">Vestibulum at eros  thh t h t htrr   rt   tr</li>
                </ul>
            </div>
        </div>
        );
    }
}