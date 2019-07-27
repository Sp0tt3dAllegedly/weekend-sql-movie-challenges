import React, { Component } from 'react';
import '../App/App.css';

import {connect} from 'react-redux';




class Home extends Component {
  // Renders the entire Home on the DOM

  componentDidMount() {
      this.props.dispatch({type: 'FETCH_MOVIES'});

  }

  handleImageClick =()=> {
      console.log('clicked image');
       this.props.history.push('/edit');
  }


  render() {
    return (


      <div className="Home">
        <header className='HomeHeader'>
          <h1 className='HomeHeaderText'>Movies Weekend Challenge</h1>
        </header>

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
            )}

      </div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Home);
