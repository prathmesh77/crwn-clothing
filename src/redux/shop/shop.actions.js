import shopActionTypes from "./shop.types";

export const updateCollecions = (collectionsMap) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
})