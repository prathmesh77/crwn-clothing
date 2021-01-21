import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { firestore,convertCollectionSnapshot } from "../../firebase.util";
import './shop.style.scss';
import { updateCollecions } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
    componentDidMount() {
        const {updateCollecions}=this.props
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshot(snapshot);
            updateCollecions(collectionMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route path={`${match.path}`} exact component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return { updateCollecions: (collectionToMap) => dispatch(updateCollecions(collectionToMap)) }
}
export default connect(null,mapDispatchToProps)(Shop);