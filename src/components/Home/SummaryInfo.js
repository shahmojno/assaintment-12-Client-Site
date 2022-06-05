import React from 'react';

const SummaryInfo = ({ img, cardTitle, bgClass, description }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title text-2xl">{cardTitle}</h2>
                <p className='card-title text-accent font-bold'>{description}</p>

            </div>
        </div >
    );
};

export default SummaryInfo;