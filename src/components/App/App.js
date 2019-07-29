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
        {/* ROUTE FOR HOME PAGE (displays movies) */}
        <Route exact path='/' component= {Home} />

      {/* ROUTE FOR DETAILS PAGE (displays full details; route opt. 1b used here) */}
       {/* TESTING FOR ADDING PROPS TO ROUTES */}
        {/*(1a) <Route path='/details' component={Details} /> */}
       {/*(1b)*/} <Route path='/details'render={(reduxStore)=>(<Details {...reduxStore} />)}/>

       {/* ROUTE FOR EDIT PAGE */}
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
