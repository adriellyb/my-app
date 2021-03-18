import React from 'react';
import { Fade } from 'react-awesome-reveal';

/** import css */
import './Footer.css';

/** import photos */
import Github from '../../assets/icons/github.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/twitter.svg';

function Footer() {
    return(
        <Fade>
            <div className="footer">
                <h3>Meow App</h3>
                <div className = "networks">
                    <a href="#"><img src = {Github} /></a>
                    <a href="#"><img src = {Facebook} /></a>
                    <a href="#"><img src = {Instagram} /></a>
                    <a href="#"><img src = {Twitter} /></a>
                </div>
                <h6>Todos os direitos reservados. © 2021 Copyright Meow App</h6>
            </div>
        </Fade>
    );
}
export default Footer;