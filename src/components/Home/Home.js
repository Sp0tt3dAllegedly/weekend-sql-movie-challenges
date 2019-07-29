import React, { Component } from 'react';
import '../App/App.css';

import {connect} from 'react-redux';


import MovieItem from '../MovieItem/MovieItem';



class Home extends Component {
  // Renders the entire Home on the DOM

  componentDidMount() {
      this.props.dispatch({type: 'FETCH_MOVIES'});

  }
  

  render() {
    return (


    <div className="Home">
        <header className='HomeHeader'>
          <h1 className='HomeHeaderText'>Movies Weekend Challenge</h1>
        </header>

    {/* render movie item component here */}
    <MovieItem history={this.props.history}/>
    </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Home);
