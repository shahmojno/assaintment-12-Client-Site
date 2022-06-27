
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProductDetails from './ProductDetails';

const Purchase = () => {

    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = ProductDetails(productId);
    console.log(product);
    let [count, setCount] = useState(0);






    const handleOrder = event => {
        event.preventDefault();
        const order = {
            productId: product._id,
            product: product.name,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
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
                    toast(`Order is success, ${data.order?._id} at ${data.order?._id}`)
                }
                else {
                    toast.error(`Already order on, ${data.order?._id} at ${data.order?._id}`)
                }
                console.log(data);



            })


    }

    return (


        <div class="card w-96 bg-base-100 shadow-xl ml-5">

            <div className=' grid grid-cols-1 gap-3 justify-items-center mt-3 '>
                <h2 class="card-title">{product.name}</h2>
                <figure><  img src={product.img} className="w=200&h=225 " alt="" /></figure>
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

                                <div className='text-lg'>
                                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="name" disabled value={product?._id || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="name" disabled value={product?.name || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="email" nsame="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                                        <input for="my-modal-6" type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />

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





