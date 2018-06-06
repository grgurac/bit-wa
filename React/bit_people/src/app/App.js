import React, { Component } from 'react';
import { fetchData } from '../services/fetchData';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PeopleList } from './partials/PeopleList';


class App extends Component {
  constructor(){
    super();
    this.state = {view: true, userData:[], refresh:0}
  }

  getUsers = () => {
    fetchData()
        .then((data) => {
            this.setState({userData: data})  
        })
  }

  componentDidMount(){
     this.getUsers()  
}

  listClickHandler = () => {
    const viewMode = this.state.view
    this.setState({view: !viewMode})
  }

  render() {
    return (
      <React.Fragment>
        <Header listClickHandler={this.listClickHandler} refreshHandler={this.getUsers} view={this.state.view}/>
        <PeopleList view={this.state.view} data={this.state.userData}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
