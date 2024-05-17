export const SET_BOOKIE = 'SET_BOOKIE';
export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';
export const SET_TEMP_USER = 'SET_TEMP_USER';
export const SET_BOOKIE_PACKAGE = 'SET_BOOKIE_PACKAGE';
export const SET_BOOKIE_SERVICE = 'SET_BOOKIE_SERVICE';


export const setBookie = bookie => dispatch => {
    dispatch({
        type: SET_BOOKIE,
        payload: bookie,
    });
};

export const setUsers = users => dispatch => {
    dispatch({
        type: SET_USERS,
        payload: users,
    });
};

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const setTempUser = tempuser => dispatch => {
    dispatch({
        type: SET_TEMP_USER,
        payload: tempuser,
    });
};

export const setBookiePackage = bookiepackage => dispatch => {
    dispatch({
        type: SET_BOOKIE_PACKAGE,
        payload: bookiepackage,
    });
};

export const setBookieService = bookieservice => dispatch => {
    dispatch({
        type: SET_BOOKIE_SERVICE,
        payload: bookieservice,
    });
};

