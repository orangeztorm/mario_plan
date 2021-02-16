import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/signin'>Sign In</NavLink></li>
            <li><NavLink to='/signup'>Log In</NavLink></li>
        </ul>
    );
};

export default SignedOutLinks