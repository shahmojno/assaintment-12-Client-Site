import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Home from './Home';
import ProductDetails from './ProductDetails';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = (refetch) => {

    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = ProductDetails(productId);
    console.log(product);
    let [count, setCount] = useState(0);


    function incrementCount() {
        if (product.minimumOrderQuantity + count < product.availableQuantity) {
            count = count + 1;
            setCount(count);
        }

    }

    function decrementCount() {
        if (product.minimumOrderQuantity + count > product.minimumOrderQuantity) {
            count = count - 1;
            setCount(count);
        }
    }




    const handleOrder = event => {
        event.preventDefault();
        const name = event.target.name.value;
        // Navigate("/");
        const order = {
            productId: product._id,
            product: product.name,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            qty: event.target.qty.value
        }

        fetch('https://mighty-plains-36942.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                //to close the modal
                if (data.success) {
                    toast(`Order is success, ${product?.name}`)

                }
                else {
                    toast.error(`Already order on, ${data.order?._id} at ${data.order?._id}`)
                }
                console.log(data);
                refetch();



            })


    }

    return (


        <div class="card w-96 bg-base-100 shadow-xl ml-96 mx-auto ">

            <div className=''>
                <h1 class="card-title text-primary text-2xl justify-content-center py-5 px-20"> Product Details</h1>

                <h2 class="card-title text-secondary ml-8 "> Product Name : {product.name}</h2>
                {/* <figure><  img src={product.img} className="w=100&h=125 " alt="" /></figure> */}
                <div class="card-body ">

                    <p>Description : {product.description}</p>
                    <p>Price : {product.pricePerUnit}</p>
                    <p>Available QT : {product.availableQuantity}</p>
                    <p>Minimum Order QT : {product.minimumOrderQuantity}</p>
                    <div >

                    </div>




                    <label onClick={() => product.availableQuantity} for="my-modal-6" class="btn modal-button">Buy Now</label>

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />


                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-secondary">Order For : {product.name}</h3>

                            <div>
                                <ToastContainer />
                                <div className='text-lg'>
                                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="name" disabled value={product?._id || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="name" disabled value={product?.name || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="email" nsame="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                                        <span className='flex '>

                                            <input type="number" placeholder='Quantity :' name="qty" value={product?.minimumOrderQuantity + count || ''} className="input input-bordered max-w-xs ml-9 w-64" />
                                            <h1 className='text-2xl pl-2 pr-2' onClick={decrementCount} >-</h1>
                                            <button className=' text-lg pl-2 pr-2' value="Change" onClick={incrementCount} >+</button>

                                        </span>
                                        <label><input htmlFor="my-modal-6" type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" /></label>


                                    </form>



                                </div>


                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div >
    );
};




export default Purchase;
