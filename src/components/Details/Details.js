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
        <header className='DetailsHeader'>
          <h1 className='DetailsHeaderText'>The Movie Gallery</h1>
          <p>Details for this movie!</p>
        </header>

    <main>
            <div>
               <ul>
               <br/>
                <br/>

                {this.props.reduxStore.genres.title}
                <br/>
                <br/>
                {this.props.reduxStore.genres.description}
                <br/>
                <br/>
               
                {this.props.reduxStore.genres.name}
                <br/>
                <br/>
</ul>
            </div>
        <br/>
{/*---------------- BUTTONS TO SAVE INPUT AND CANCEL INPUT(NAV AWAY) -------------------*/}
            <button onClick={this.handleDetailsClick1}>Edit</button>
            <button onClick={this.handleDetailsClick2}>Home</button>

    </main>
    </>

     
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Details);
