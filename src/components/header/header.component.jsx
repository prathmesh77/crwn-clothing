import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { cartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className=''></Logo>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/shop' className='option'>CONTACT</Link>
                {currentUser ?
                    <div className='option' onClick={()=>{auth.signOut()}} >SIGN OUT</div>
                    :<Link to="/signIn">SIGN IN</Link>
                }
                <CartIcon/>
                {hidden?null:<CartDropdown/>}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser(state),
        hidden:cartHidden(state)
    }
};

export default connect(mapStateToProps)(Header);