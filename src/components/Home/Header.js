import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth)
    console.log(user);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link to="/">Home</Link></li>

        {
            user && <li><Link to="/dashboard">Dasboard</Link></li>
        }


        {user && <li><Link to="/myprofile">My Profile</Link></li>}
        <li><Link to="/portfolio">My Portfolio</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>


        {
            // user && <li><Link to="/purchase">Purchase</Link></li>
        }

        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
        <h3 className="ml-5">{user && user.displayName}</h3>
        <h3 className='ml-5'>{user && user.email}  </h3>
    </>



    return (
        <div className="navbar bg-sky-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Hand Tools Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">

                {menuItems}
            </div>
            <div className="navbar-end">
                <label tabindex="1" for="dashboard-saidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <label class="btn btn-primary drawer-button lg:hidden">abc</label>

            </div>
        </div>
    );
};

export default Header;