import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type:shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionsSuccess = (collection) => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collection
})

export const fetchCollectionsFailure = (error) => ({
    type: shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:error
})

