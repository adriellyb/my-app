import React from 'react';
//import { Link } from 'react-router-dom';

/** import css */
import './Navbar.css';

/** import photos */
import Logo from '../../assets/rbw2.png';

function Navbar() {
    return(
        <div id="header">
            <div className="logo">
                <img src={Logo} alt="rainbow"/>
            </div>
            <div className="items">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>About</li></a>
                    <a href="/"><li>Contact</li></a>
                    <button>DOWNLOAD</button>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;