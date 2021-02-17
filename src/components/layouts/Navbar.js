import React from 'react';
import {Link} from 'react-router-dom';
import SignedIn from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedIn/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/home' className='brand-logo'>MarioPlan</Link>
                {links}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(Navbar);