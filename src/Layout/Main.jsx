import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    const location = useLocation();
    const excludeHF = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            { excludeHF || <Navbar/>}
            <Outlet/>
            {excludeHF || <Footer/>}
        </div>
    );
};

export default Main;