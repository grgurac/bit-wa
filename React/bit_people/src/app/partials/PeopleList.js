import React, { Component } from 'react';
import {SinglePerson} from "./SinglePerson";
import { fetchData } from '../../services/fetchData';
import {SinglePersonGrid} from "./SinglePersonGrid"


export class PeopleList extends Component {
    constructor(props){
        super(props);
        this.state = {userData:[]}
    }

    componentDidMount(){
        fetchData()
            .then((data) => {
                this.setState({userData: data})  
            })
    }


    render() {
        return (
            <div className="row">
                <div className="container collection">
                {this.state.userData.map((user) => {
                    //return <SinglePerson user = {user}/>
                return <SinglePersonGrid user = {user} />

                   
                })}
                </div>
            </div>
        )
    }

}

