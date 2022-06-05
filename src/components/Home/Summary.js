import React from 'react';
import SummaryInfo from './SummaryInfo';
import clientS from '../../images/Logo/1.jpg'
import clientF from '../../images/Logo/2.jpg'
import clientC from '../../images/Logo/3.jpg'


const Summary = () => {
    return (
        <div className='bg-slate-200 mx-auto px-12 pt-5 pb-5 text-center'>
            <h1 className='text-4xl font-bold'>Business Summary</h1>
            <p className='text-xl font-bold pb-5'>Users Expectation</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                <SummaryInfo cardTitle="Client Feedbacks" bgClass="bg-gradient-to-r from-secondary to-primary" img={clientC} description="50K +"></SummaryInfo>
                <SummaryInfo cardTitle="Clients" bgClass="bg-gradient-to-r from-secondary to-primary" img={clientS} description="World wide clients 500 +"></SummaryInfo>
                <SummaryInfo cardTitle="Business Countries" bgClass="bg-gradient-to-r from-secondary to-primary" img={clientF} description="Total Countries 110 business ongoing"></SummaryInfo>
            </div>
        </div>

    );
};

export default Summary;