import React from 'react';
import SignIn from '../../components/sign-In/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signIn-and-signOut.style.scss';

const SignInAndSignOut = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInAndSignOut;