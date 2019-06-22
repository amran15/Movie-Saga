import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('GET_DETAILS', getDetails);
}
//generator function to get movies
function* getMovies(action) {
    try {
        const getMovies = yield axios.get('/movies');
        console.log('movies:', getMovies);
        yield put({ type: 'SET_MOVIES', payload: getMovies.data })
    } catch (error) {
        console.log('error getting movies', error);
    }
}
//generator function to get movies
function* getGenres(action) {
    try {
        const getGenres = yield axios.get('/movies/genres');
        console.log('genres:', getGenres);
        yield put({ type: 'GET_GENRES', payload: getGenres.data })
    } catch (error) {
        console.log('error getting Genres', error);
    }
}

function* getDetails(action) {
    try {
        const getDetails = yield axios.get('/details/:id');
        console.log('details:', getDetails);
        yield put({ type: 'GET_DETAILS', payload: getDetails.data })
    } catch (error) {
        console.log('error getting details', error);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'GET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
