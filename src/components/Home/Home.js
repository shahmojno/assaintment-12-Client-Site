import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Summary from './Summary';
import TopReviews from './TopReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <TopReviews></TopReviews>
            <Summary></Summary>


        </div>
    );
};

export default Home;