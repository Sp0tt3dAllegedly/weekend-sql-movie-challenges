import React, { Component } from 'react';
// import './Home.css';

import {connect} from 'react-redux';




class Home extends Component {
  // Renders the entire Home on the DOM
  render() {
    return (


      <div className="Home">
        <header className='HomeHeader'>
          <h1 className='HomeHeaderText'>Movies Weekend Challenge</h1>
        </header>
      </div>
    );
  }
}

export default connect() (Home);
