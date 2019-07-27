 import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


 
 
class MovieItem extends Component{
 
//   add in item to pass to get at id
  handleImageClick = (item) => {
     this.props.dispatch({type: 'FETCH_DETAILS', payload: item.id});
      console.log('clicked image', item.id);
    this.props.history.push('/details');
  }

    render(){
        return(
            <div>
                {
                    this.props.reduxStore.movies.map( item  => (
                        <div key={item.id}>
                            <br/>
                            <img src={item.poster} alt="" onClick={()=>this.handleImageClick(item)}/>
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