import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


class Details extends Component {
  // Renders the Details page on the DOM


  handleDetailsClick1 =()=>{
      this.props.history.push('/edit')
  }

  handleDetailsClick2 =()=>{
      this.props.history.push('/')
  }

  render() {
    return (


    <>
        <header className='EditHeader'>
          <h1 className='EditHeaderText'>Details for this movie!</h1>
            <p> this is the details header </p>
        </header>

    <main>
            <p> this is the body </p>
        <br/>
{/*---------------- BUTTONS TO SAVE INPUT AND CANCEL INPUT(NAV AWAY) -------------------*/}
            <button onClick={this.handleDetailsClick1}>Edit</button>
        <br/>
            <button onClick={this.handleDetailsClick2}>Home</button>

    </main>
    </>

     
    );
  }
}

export default connect() (Details);
