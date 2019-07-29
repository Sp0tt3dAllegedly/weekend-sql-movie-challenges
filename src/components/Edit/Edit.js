import React, { Component } from 'react';
// import './Details.css';

import { connect } from 'react-redux';


class Edit extends Component {
  // Renders the Details page on the DOM

  // local state for editing!

  state = {
      movieId: this.props.reduxStore.genres.id,
      description: '',
      title: ''
  }


  // SAVE BUTTON
    handleSaveClick = () => {
        console.log('clicked save-named clicker');
       this.props.dispatch({type: 'EDIT_DETAILS', payload: this.state});
       alert('heading back to home page after editing!');
       this.props.history.push('/');
    }

// CANCEL BUTTON
    // sends user back to home page 
        // without changing anything!

    handleCancelClick = () => {
        console.log('clicked cancel entry button!');
        alert('heading back to home page without editing!');
        this.props.history.push('/');
    }

handleChangeForDescription = (event, propertyToChange) => {
    
     this.setState({
         [propertyToChange]: event.target.value

     })
     console.log('typing in description', this.state.description);
}

handleChangeForTitle = (event, propertyToChange) => {
    
     this.setState({
         [propertyToChange]: event.target.value

     })
     console.log('typing in title section...', this.state.title);
}

  render() {
      console.log(this.state);
      
    return (


    <>
        <header className='EditHeader'>
          <h1 className='EditHeaderText'>Edit this movie!</h1>
            <p> this is the edit header </p>
        </header>

    <main>
            <p> this is the body of the header </p>
        <br/>

        <input type="text" name="description" placeholder="edit this movie description?"
                          onChange= {(event) => this.handleChangeForDescription(event, 'description')}
                          value={this.state.description}>
                   </input>

        <input type="text" name="title" placeholder="edit this movie title? are you sure??"
                          onChange= {(event) => this.handleChangeForTitle(event, 'title')}
                          value={this.state.title}>
                   </input>

{/*---------------- BUTTONS TO SAVE INPUT AND CANCEL INPUT(NAV AWAY) -------------------*/}
        <br/>
        <br/>
        <br/>
        <br/>
            <button onClick={this.handleSaveClick}>Save</button>
        <br/>
            <button onClick={this.handleCancelClick}>Cancel</button>

    </main>
    </>

     
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStoreToProps)(Edit);
