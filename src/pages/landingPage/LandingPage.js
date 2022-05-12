import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer.js';
import Header from '../../components/Header.js';

const LandingPage = () => {
    return(
        <>
            <Header />
            <div>
                <Link to = "/write">
                    <button>당근 매물 글 써주러 가볼까요?</button>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
