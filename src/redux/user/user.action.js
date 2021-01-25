import UserActionTypes from './user.type';

export const googleSignInStart = () => ({
    type:UserActionTypes.GOOGLE_SIGNIN_START
})

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload:user
})

export const googleSignInFailure = (error) => ({
    type: UserActionTypes.googleSignInFailure,
    payload:error.message
})
