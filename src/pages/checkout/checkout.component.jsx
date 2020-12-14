import React from 'react';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.style.scss';

const CheckOut = ({cartItems,cartTotal}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div> 
            {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={ cartItem}/>
            )}
            <div className='total'>Total: ${cartTotal}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                 <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeCheckoutButton price={ cartTotal}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state),
        cartTotal: selectCartTotal(state)
    }
}

export default connect(mapStateToProps) (CheckOut);