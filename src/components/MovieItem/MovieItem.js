 import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


 
 
class MovieItem extends Component{
 
//   add in item to pass to get at id
  handleImageClick = () => {
      console.log('clicked image');
      this.props.history.push('/details');
  }

    render(){
        return(
            <div>
                {
                    this.props.reduxStore.movies.map( item  => (
                        <div key={item.id}>
                            <br/>
                            <img src={item.poster} alt="" onClick={this.handleImageClick}/>
                            <br/>
                            <br/>
                            {item.description}
                            </div>
                    )
                )
                }

            </div>
    )
}
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(MovieItem);