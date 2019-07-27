import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
<Router>

      <main>
        <Route exact path='/' component= {Home} />
       
       {/* TESTING FOR ADDING PROPS TO ROUTES */}
        {/* <Route path='/details' component={Details} /> */}
        <Route path = '/details' render={(reduxStore) => ( 
            <Details {...reduxStore} />
              )}/>


        <Route path='/edit' component= {Edit} />
      </main>

</Router>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStoreToProps) (App);
