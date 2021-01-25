import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.comonent';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signIn-and-signOut/signIn-and-signOut.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import {selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path='/signIn' render={() =>
                        this.props.currentUser ?
                            (<Redirect to="/" />) :
                            (<SignInAndSignUpPage />)}
                    />
                </Switch>
            </div>
        );      
    }    
}

const mapStateToProps = state => ({
    currentUser:selectCurrentUser(state)
})
export default connect(mapStateToProps)(App);