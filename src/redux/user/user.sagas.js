import { takeLatest,all,put,call } from 'redux-saga/effects';
import UserActionTypes from './user.type';
import { auth, googleProvider,createUserProfileDocument } from '../../firebase.util';
import { googleSignInSuccess, googleSignInFailure } from './user.action';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        
        const userAuth = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userAuth.get();
        yield put(googleSignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    } catch (error) {
     yield put(googleSignInFailure(error))   
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START,signInWithGoogle)
}
export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}