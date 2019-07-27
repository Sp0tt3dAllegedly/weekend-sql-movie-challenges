import React, { Component } from 'react';
import '../App/App.css';

import {connect} from 'react-redux';


import MovieItem from '../MovieItem/MovieItem';



class Home extends Component {
  // Renders the entire Home on the DOM

  componentDidMount() {
      this.props.dispatch({type: 'FETCH_MOVIES'});

  }

// handleImageClick = () => {
//     console.log('clicked image');
//     this.props.history.push('/details');
// }

  render() {
    return (


    <div className="Home">
        <header className='HomeHeader'>
          <h1 className='HomeHeaderText'>Movies Weekend Challenge</h1>
        </header>
    
    <MovieItem history={this.props.history}/>
    </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Home);
