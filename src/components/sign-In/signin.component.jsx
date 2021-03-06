import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart } from '../../redux/user/user.action';
import './signin.style.scss';
import { auth } from '../../firebase.util';

class SignIn extends React.Component{
    state = {
        email: '',
        password: ''
    };

    handleSubmit=async e=> {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error)
        }
        
    }

    handleChange=(e)=> {
        const { name, value } = e.target;
        this.setState({ [name]: value },()=>{console.log(this.state)});
    }

    render() {
        const { googleSignInStart } = this.props;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:()=>dispatch(googleSignInStart())
})
export default connect(null,mapDispatchToProps)(SignIn);