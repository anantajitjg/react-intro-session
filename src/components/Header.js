import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header>
            <div className="navbar shadow-sm">
                <div className="container d-flex justify-content-between">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} alt="wp-content.co" width="187" height="27" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
 
export default Header;