import React from 'react';
import footer from '../../images/1.jpg'

const Footer = () => {
    return (
        <footer style={{
            // background: `url(${footer})`, backgroundSize: 'cover'
        }} className="mt-10" >
            <div className='footer bg-sky-300 p-10'>
                <div>
                    <span className="footer-title font-bold text-black text-2xl">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title font-bold text-black text-2xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title font-bold text-black text-2xl">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-sky-300 text-base-content ">
                <div className='my-0 text-center'>
                    <p>Copyright © 2022 - All right reserved by Industries Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;