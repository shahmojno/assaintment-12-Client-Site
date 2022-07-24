import React from 'react';
import Client from '../../images/Client/Shah-Mojno.jpg'

const MyPortfolio = () => {
    return (
        <section className='my-28 mx-auto px-12'>
            <div className='flex justify-between'>

                <div className='text-3xl text-primary mb-5 bg-slate-400  px-10 py-1'>

                    <h2 className=' text-white '>My Portfolio</h2>

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card-body text-buttom card w-100 bg-slate-100  shadow-xl p-10 mr-10">
                    <h1 className='text-xl font-bold text-primary'>Shah Mojno</h1>
                    <h1>Web Developer</h1>
                    <h3>MSS(Political Science)</h3>
                    <h3>mojno12@gmail.com</h3>
                </div>


                <div className="card w-100 bg-slate-100 shadow-xl mx-auto">


                    <div className="flex items-center">
                        <div className="avatar">
                            <div className=" rounded-full ring ring-primary ring-offset-base-100 w-60 m-20">
                                <img src={Client} />


                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>

                <div className='ml-10 text-2xl card w-100 bg-slate-100  shadow-xl p-10'>
                    <h1 className='text-3xl text-secondary mt-10 mb-5 '>Live Website :</h1>

                    <div className='ml-20'>
                        <a class="link link-primary text-blue-600" href="https://exquisite-pudding-aad010.netlify.app/" target="_blank">* Labtop Bazar</a> <br />
                        <a class="link link-primary text-blue-600" href="https://marvelous-bienenstitch-c709f4.netlify.app/" target="_blank">* Fitness Club</a><br />
                        <a class="link link-primary text-blue-600" href="https://snazzy-meerkat-ea616f.netlify.app/" target="_blank">* Tshirt Mania</a>

                    </div>

                </div>


            </div>
        </section>
    );
};


export default MyPortfolio;


