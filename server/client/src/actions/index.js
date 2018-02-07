import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/user');
//     dispatch({type:FETCH_USER, payload: res.data});
// }
export const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/user')
            .then((res) => dispatch({type:FETCH_USER, payload: res.data}));
    };
};

export const handleToken = (token) => {
    return function(dispatch) {
        axios.post('/api/stripe', token)
            .then((res) => dispatch({type:FETCH_USER, payload: res.data}));
    };
};

export const submitSurvey = (values, history) => {
    return function(dispatch) {
        axios.post('/api/surveys', values)
            .then((res) => dispatch({type:FETCH_USER, payload: res.data}));
        history.push('/surveys');
    };
};

export const fetchSurveys = () => {
    return function(dispatch) {
        axios.get('/api/surveys')
            .then((res) => dispatch({type:FETCH_SURVEYS, payload: res.data}));
    };
};

// export const fetchSurveys = () => async dispatch => {
//     const res = axios.get('/api/surveys');

//     dispatch({type: FETCH_SURVEYS, payload: res.data});
// };

// export const handleToken = (token) => async dispatch => {
//     const res = await axios.post('/api/stripe');
//     dispatch({type:FETCH_USER, payload: res.data});
// };

//Redux Thunk middleware allows to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
//Usualy uses for async actions. 