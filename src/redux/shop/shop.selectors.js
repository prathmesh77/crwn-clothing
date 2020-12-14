import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionPreview = createSelector(
    [selectCollections],
    collection=>Object.keys(collection).map(key=>collection[key])
)

export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collection=>collection[collectionUrlParam]
)
