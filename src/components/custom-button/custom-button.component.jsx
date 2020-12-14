import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn,isInverted,...otherProps}) => {
    return (
        <div>
            <button className={`${isInverted? 'inverted':''} ${isGoogleSignIn? 'google-sign-in':''} custom-button`}
                {...otherProps}
            >{children}</button>
        </div>
    );
}

export default CustomButton;
