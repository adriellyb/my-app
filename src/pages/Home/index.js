import React, { useEffect } from 'react';

/** imports components */
import Navbar from '../../components/NavBar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <Footer />
        </div>
    );
}