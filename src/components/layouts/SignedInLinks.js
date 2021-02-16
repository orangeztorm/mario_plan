import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedIn = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pinklighten-1'>TK</NavLink></li>
        </ul>
    );
};

export default SignedIn