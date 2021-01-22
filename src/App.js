import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.comonent';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signIn-and-signOut/signIn-and-signOut.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import {auth,createUserProfileDocument} from './firebase.util';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser,collectionArray } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
             if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } 
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path='/signin' render={() =>
                        this.props.currentUser ?
                            (<Redirect to="/" />) :
                            (<SignInAndSignUpPage />)}
                    />
                </Switch>
            </div>
        );      
    }
    
}
const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser(state)
    }
}

const mapDispatchToProps = dispatch => {
    return { setCurrentUser: user => dispatch(setCurrentUser(user)) }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
