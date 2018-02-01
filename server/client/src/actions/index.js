import axios from 'axios';
import { FETCH_USER } from './types';

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

// export const handleToken = (token) => async dispatch => {
//     const res = await axios.post('/api/stripe');
//     dispatch({type:FETCH_USER, payload: res.data});
// };

//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
//Usualy uses for async actions. 