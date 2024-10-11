import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import ChefRecommendations from './ChefRecommendations';
import Featured from './Featured';
import Testimoianls from './Testimoianls';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Chef's Place | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <ChefRecommendations/>
            <Featured/>
            <Testimoianls/>
        </div>
    );
};

export default Home;