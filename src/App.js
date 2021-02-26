import React,{lazy,Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import {selectCurrentUser } from './redux/user/user.selectors';
import './App.css';
const Homepage = lazy(() => import('./pages/homepage/homepage.comonent'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/signIn-and-signOut/signIn-and-signOut.component'));


class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Suspense fallback={<div>Loading ..</div>}>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/shop" component={Shop} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path='/signIn' render={() =>
                        this.props.currentUser ?
                            (<Redirect to="/" />) :
                            (<SignInAndSignUpPage />)}
                        />
                    </Suspense>
                </Switch>
            </div>
        );      
    }    
}

const mapStateToProps = state => ({
    currentUser:selectCurrentUser(state)
})
export default connect(mapStateToProps)(App);