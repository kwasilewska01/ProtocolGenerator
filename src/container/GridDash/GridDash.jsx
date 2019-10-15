import React, { Component } from 'react';
import PeopleList from '../PeopleList/PeopleList.jsx';
import Collapse from '../../components/ui/Collapse.jsx';
import './GridDash.scss'

export default class GridDash extends Component {
    render(){
    return (
            <div className="row no-wrap">
                <Collapse />
                <PeopleList />
            </div>
        );
    }
}