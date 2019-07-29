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
               
               <br/>
                <br/><ul>
                 {
                    this.props.reduxStore.genres.map( item  => (
                        <div >
                            
                               <span className="titleItem">{item.title}</span>
                               
                               
                               <li key={item.id}>{item.description}</li>
                               <br/>
                                <br/>
                                <li>{item.name}</li>
                                

                            </div>
                    )
                  
                )
                }
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
