import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


class Details extends Component {
  // Renders the Details page on the DOM
  render() {
    return (


      <div className="Details">
        <header className='DetailsHeader'>
          <h1 className='DetailsHeaderText'>Movie Details!</h1>
        </header>
      </div>

     
    );
  }
}

export default connect() (Details);
