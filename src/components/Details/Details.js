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
          <h1 className='DetailsHeaderText'>Details for this movie!</h1>
            <p> this is the details header </p>
        </header>

    <main>
            <div>
                Here's the thing you wanted :P
               <br/>
                <br/>
                 {
                    this.props.reduxStore.genres.map( item  => (
                        <div key={item.id}>
                            
                               <span className="titleItem">{item.title}</span>
                               
                               <ul>
                               <li>{item.description}</li>
                               <br/>
                                <br/>
                                <li>{item.name}</li>
                                </ul>

                            </div>
                    )
                )
                }

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
