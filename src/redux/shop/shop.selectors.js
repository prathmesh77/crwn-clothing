import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionPreview = createSelector(
    [selectCollections],
    collection=>collection?Object.keys(collection).map(key=>collection[key]):[]
)

export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collection=>collection?collection[collectionUrlParam]:null
)

export const selectIsFetchingCollections = createSelector(
    [selectShop],
    shop=>shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop=>!!shop.collections
)