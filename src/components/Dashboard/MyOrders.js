import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [product, setproduct] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://mighty-plains-36942.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()

                })
                .then(data => setproduct(data));

        }
    }, [user])



    return (
        <div>
            <h1>My Order {product.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>

                            <th>Name</th>
                            <th>phone</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.userName}</td>
                                    <td>{a.phone}</td>
                                    <td>{a.product}</td>
                                    <td>{a.qty}</td>

                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyOrders;