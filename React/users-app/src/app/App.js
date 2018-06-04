import React, { Component } from 'react';
//import logo from './logo.svg';
//import './app/App.css';
import Header from "./partials/header.js";
import Footer from "./partials/footer.js";
import {UsersList} from "./partials/userList";
import {GridUserList} from "./partials/gridUserList.js";
import PropTypes from 'prop-types';

const App = (props) => {
  
  return (
  <React.Fragment>
    <Header />
    {/* <UsersList usersData={props.usersData}/> */}
    <GridUserList usersData={props.usersData}/>
    <Footer />
  </React.Fragment>)
}

export default App;
