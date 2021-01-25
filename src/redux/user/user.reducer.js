import UserActionTypes from './user.type';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage:undefined
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage:undefined
            };
        case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            };
        default:
            return state;
    }
};

export default userReducer;