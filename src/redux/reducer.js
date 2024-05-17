import { SET_BOOKIE, SET_USERS, SET_USER, SET_TEMP_USER, SET_BOOKIE_PACKAGE, SET_BOOKIE_SERVICE } from './action';

const initialState = {
    bookie: null,
    users: [],
    user: null,
    tempuser: null,
    bookiepackage: null,
    bookieservice: null,
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKIE:
            return {...state, bookie: action.payload};
        case SET_USERS:
            return {...state, users: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        case SET_TEMP_USER:
            return {...state, tempuser: action.payload};
        case SET_BOOKIE_PACKAGE:
            return {...state, bookiepackage: action.payload};
        case SET_BOOKIE_SERVICE:
            return {...state, bookieservice: action.payload};
        default:
            return state;
    }
}

export default appReducer;