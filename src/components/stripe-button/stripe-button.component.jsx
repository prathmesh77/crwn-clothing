import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hx6U8BA5MxKMat66rDaRMdwnJ8iJSW5814Rqd0FSrZshCr1udykgyVgkThfORaAcIC2ztn7sVR3gux7UHaxYyuP00ShVW7h0b';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            image='https://svgshare.com/i/CUz.svg'
            billingAddress
            shippingAddress
            description={ `Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;