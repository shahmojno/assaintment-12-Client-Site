import React from 'react';
import tools from '../../images/1.jpg';
import PrimaryButton from '../Shared/PrimaryBtn';


const Banner = () => {
    return (


        <div className="hero min-h-screen bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={tools} className="max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hand Tools </h1>
                    <p className="py-6 text-xl pr-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;