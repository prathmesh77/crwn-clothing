import React from 'react';
import { Route } from 'react-router-dom';

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import './shop.style.scss';

const Shop = ({match} ) => {
    //console.log(match);

    return (
        <div className='shop-page'>
            <Route path={`${match.path}`} exact component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}

export default Shop;