import React from 'react';
import Banner from './Banner';
import Products from './Products';


import Reviews from './Reviews';
import Summary from './Summary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;