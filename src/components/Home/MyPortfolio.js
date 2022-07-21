import React from 'react';
import Client from '../../images/Client/Shah-Mojno.jpg'

const MyPortfolio = () => {
    return (
        <section className='my-28 mx-auto px-12'>
            <div className='flex justify-between'>

                <div>
                    {/* <h4 className="text-xl text-primary text font-bold">Shah Mojno</h4> */}
                    <h2 className='text-3xl text-primary mb-5'>My Portfolio</h2>

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div >
                    <h1 className='text-2xl text-secondary '>Live Website :</h1>

                    <a class="link link-primary" href="https://exquisite-pudding-aad010.netlify.app/">Labtop Bazar</a>

                </div>
                <div className="card w-100 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h1>Shah Mojno</h1>
                        <h1>Web Developer</h1>
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-30 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={Client} />

                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};


export default MyPortfolio;


