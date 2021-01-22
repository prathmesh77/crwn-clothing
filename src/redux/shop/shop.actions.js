import { firestore,convertCollectionSnapshot } from "../../firebase.util";
import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type:shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionsSuccess = (collection) => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collection
})

export const fetchCollectionsFailure = (error) => ({
    type: shopActionTypes.fetchCollectionsFailure,
    payload:error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshot(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error =>
            dispatch(fetchCollectionsFailure(error.message))
        );
    }
}
