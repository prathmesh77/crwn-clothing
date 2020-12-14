import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { cartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.style.scss';
const CartDropdown = ({ cartItem, history, toggleHidden }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItem.length?
                    (cartItem.map(item =>
                        (<CartItem key={item.id} cartitem={item} />))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>   
                    )
                        
                }
            </div>
            <CustomButton onClick={() =>{
                history.push('/checkout');
                toggleHidden();
            }}
            >
                Go To Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { cartItem: selectCartItems(state)};
}
const mapDispatchToProps = dispatch => {
    return {toggleHidden:()=>dispatch(toggleCartHidden())}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));