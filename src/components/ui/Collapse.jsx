import React, { Component } from 'react';
import './Collapse.scss';
import Squere from './Squere';

export default class Collapse extends Component {
    render(){
    return (
        <div class="row">
            <div class="col-1">
                <div class="nav nav-pills" role="tablist" aria-orientation="vertical">
                    <Squere 
                        tabText="Josi"
                        />
                    {/* <a className="nav-link" data-toggle="pill" href="#v-pills-home" role="tab" aria-selected="false">Dashbord</a>
                    
                    <a className="nav-link" data-toggle="pill" href="#v-pills-profile" role="tab" aria-selected="false">Osoby</a>
                    <a className="nav-link" data-toggle="pill" href="#v-pills-messages" role="tab" aria-selected="false">Firmy</a>
                    <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Konrakty</a>
                    <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Raporty</a>
                    <a className="nav-link"  data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Ustawienia</a> */}
                </div>
            </div>
        </div>
    );
    }
}