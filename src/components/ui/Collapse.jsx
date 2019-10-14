import React, { Component } from 'react';
import './Collapse.scss';
import Squere from './Squere';
import apps from '../../images/icons/apps.svg';
import people from '../../images/icons/people_alt.svg';
import business from '../../images/icons/business.svg';
import chrome from '../../images/icons/chrome_reader_mode.svg';
import insert from '../../images/icons/insert_chart_outlined.svg';


export default class Collapse extends Component {
    render(){
    return (
        <div className="row">
            <div className="col-padding-15">
                <div className="nav nav-pills" role="tablist" aria-orientation="vertical">
                    <Squere 
                        tabText="MAIN"
                    />
                    <Squere 
                        tabText="Dashbord"
                        tabIcon={apps}
                        alt="apps"
                    />
                    <Squere 
                        tabText="Osoby"
                        tabIcon={people}
                        alt="people"
                    />
                    <Squere 
                        tabText="Firmy"
                        tabIcon={business}
                        alt="business"
                        
                    />
                    <Squere 
                        tabText="Umowy"
                        tabIcon={chrome}
                        alt="chrome"
                    />
                     <Squere 
                        tabText="Raporty"
                        tabIcon={insert}
                        alt="insert"
                    />                   
                </div>
            </div>
        </div>
    );
    }
}