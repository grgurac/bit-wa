import React, { Component } from 'react';
import { fetchData } from '../services/fetchData';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PeopleList } from './partials/PeopleList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PeopleList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
