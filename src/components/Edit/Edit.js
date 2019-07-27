import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


class Edit extends Component {
  // Renders the Details page on the DOM


  // SAVE BUTTON
    handleEditClick1 = () => {
        console.log('clicked save clicker');
       
    }

// CANCEL BUTTON
    handleEditClick2 = () => {
        console.log('clicked edit clicker');
        this.props.history.push('/');
    }

  render() {
    return (


    <>
        <header className='EditHeader'>
          <h1 className='EditHeaderText'>Edit this movie!</h1>
            <p> this is the edit header </p>
        </header>

    <main>
            <p> this is the body of the header </p>
        <br/>
{/*---------------- BUTTONS TO SAVE INPUT AND CANCEL INPUT(NAV AWAY) -------------------*/}
            <button onClick={this.handleEditClick1}>Save</button>
        <br/>
            <button onClick={this.handleEditClick2}>Cancel</button>

    </main>
    </>

     
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Edit);
