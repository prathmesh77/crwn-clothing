import { takeLatest,put,call } from 'redux-saga/effects';

import {fetchCollectionsSuccess,fetchCollectionsFailure } from "./shop.actions";
import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshot } from "../../firebase.util";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshot, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))   
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}