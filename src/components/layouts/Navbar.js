import React from 'react';
import {Link} from 'react-router-dom';
import SignedIn from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from 'react-redux';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/home' className='brand-logo'>MarioPlan</Link>
                <SignedIn/>
                <SignedOutLinks/>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return (null);
};

export default connect(mapStateToProps)(Navbar);