import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import Axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put} from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('FETCH_MOVIES', fetchMoviesSaga);
    yield takeLatest('EDIT_DETAILS', editSaga);
    yield takeLatest('FETCH_DETAILS', fetchDetailsSaga);

}


function* fetchMoviesSaga(){
    try {
        const response = yield Axios.get('/movies-list/');
        yield put ({type: 'GET_MOVIES', payload: response.data});
    } catch (error) {
        console.log('error getting movies', error);
        alert('could not get movies');
        
    }
}

function* fetchDetailsSaga(action){
     try {
        const response = yield Axios.get(`/movies-list/${action.payload}`);
        yield put ({type: 'SET_DETAILS', payload: response.data});
    } catch (error) {
        console.log('error getting details', error);
        alert('could not get movie details');
        
    }
}


// this saga is used for editing a movie item in the database!
function* editSaga(action){
    'EDIT_DETAILS'
    try {
        yield Axios.put(`/movies-list/edit-page/${action.payload.movieId}`, action.payload);
        yield put ({type: 'EDIT_DETAILS'});
   } catch (error) {
     console.log('error editing those details...', error);
     alert('Sorry, try something else...');
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// const movieGenreList = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_MOVIE_LIST':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const reduxStore = createStore(
    combineReducers({
        movies,
        genres,
        // movieGenreList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
