import React, { Component } from 'react';
import {SinglePerson} from "./SinglePerson";
import { fetchData } from '../../services/fetchData';
import {SinglePersonGrid} from "./SinglePersonGrid"


export class PeopleList extends Component {
    constructor(props){
        super(props);
        this.state = {userData:this.props.data}
    }

    

    render() {
        return (
            <div className="row">
                <div className="container collection">
                {this.state.userData.map((user) => {
                return this.props.view ? <SinglePerson user = {user}/> : <SinglePersonGrid user = {user} />  
                })}
                </div>
            </div>
        )
    }

}

