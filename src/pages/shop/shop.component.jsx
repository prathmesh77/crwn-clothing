import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import {selectIsFetchingCollections,selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import './shop.style.scss';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

class Shop extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();     
    }

    render() {
        const { match,isFetching,iscollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route path={`${match.path}`} exact render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={isFetching}/>}
                />
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    (<CollectionWithSpinner isLoading={!iscollectionLoaded} {...props} />)
                }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: selectIsFetchingCollections(state),
    iscollectionLoaded:selectIsCollectionLoaded(state)
})

const mapDispatchToProps = dispatch => {
    return { fetchCollectionsStart: () => dispatch(fetchCollectionsStart()) }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);