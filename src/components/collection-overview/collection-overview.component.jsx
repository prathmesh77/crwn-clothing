import React from 'react';
import { connect } from 'react-redux';

import {selectCollectionPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
    //console.log(collections);
    return (
        <div className='collection-overview'>
            {
                collections.map(({id,...otherItemProps}) => (                        
                    <CollectionPreview key={ id} {...otherItemProps }/> 
                ))
            }
        </div>
    );
}

const mapStateToProps = state => (
    { collections: selectCollectionPreview(state) }
);

export default connect(mapStateToProps)(CollectionOverview);