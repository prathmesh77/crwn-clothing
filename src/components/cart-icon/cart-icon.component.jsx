import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden,cartItemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
};

const mapStateToProps = state => (
    { cartItemCount: selectCartItemsCount(state) }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
