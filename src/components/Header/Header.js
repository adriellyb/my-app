import React, { useEffect, useState } from 'react';
import api from '../../services/api.js'

/** import css */
import './Header.css';

/** import images */
import all_articles from "../../assets/screens/all_articles.png"
import create_post from "../../assets/screens/create_post.png" 
import first from "../../assets/screens/first.png" 
import login from "../../assets/screens/login.png" 
import register from "../../assets/screens/register.png"
import article from "../../assets/screens/article.png"
import facts from "../../assets/screens/facts.png" 
import home from "../../assets/screens/home.png" 
import profile from "../../assets/screens/profile.png"
import user_list from "../../assets/screens/user_list.png"
import app from "../../assets/app.png"
import playstore from "../../assets/get-it-on-google-play-badge.png"
import applestore from "../../assets/App_Store_Badge.png"

function Header() {

    const [fact, setFacts] = useState([]);

    useEffect( () => {
        async function getFact() {
        const response = await api.get ('/facts/random',{});
        setFacts(response.data.text);
        console.log(response.data);
        }
        getFact();
    },[]);

    return(
        <div id="hero">
            <div className="text">
                <p>A social network to people who wanna scream good things!!</p>
                <h3>With Meow, you could have interact with other people. The propose is make relationships less toxic.</h3>
                <a href="#"><img src={playstore} /></a>
                <a href="#"><img src={applestore} /></a>
            </div>
            <div className="screens">
                <img src = {app} />
            </div>
        </div>
    );
}
export default Header;