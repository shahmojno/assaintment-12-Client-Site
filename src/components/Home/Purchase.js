import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Purchase = () => {

    const { productId } = useParams();
    const [product] = ProductDetails(productId);
    console.log(product);


    let [count, setCount] = useState(0);

    function incrementCount() {
        if (product.minimumOrderQuantity + count <= product.availableQuantity) {
            count = count + 1;
            setCount(count);
        }


    }




    function decrementCount() {
        if (product.minimumOrderQuantity + count >= product.minimumOrderQuantity) {
            count = count = -1;
            setCount(count);
        }

    }





    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <h2 class="card-title">{product.name}</h2>
            <figure><  img src={product.img} className="w=400&h=225" alt="" /></figure>
            <div class="card-body">

                <p>Description : {product.description}</p>
                <p>Price : {product.pricePerUnit}</p>
                <p>Available QT : {product.availableQuantity}</p>
                <p>Minimum Order QT : {product.minimumOrderQuantity}</p>
                <div >

                    <label onClick={() => product.availableQuantity} for="my-modal-6" class="btn modal-button">Buy Now</label>
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <div>
                                <p>Price : {product.pricePerUnit}</p>
                                <p>Available QT : {product.availableQuantity}</p>
                                <p className='mb-3'>Minimum Order QT : {product.minimumOrderQuantity}</p>
                            </div>
                            <input type="text" placeholder="Address" class="input input-bordered input-info w-full max-w-xs mb-3" />
                            <input type="text" placeholder="Phone " class="input input-bordered input-info w-full max-w-xs mb-3" />

                            <input type="number" name="" class="input input-bordered input-info w-full max-w-xs mb-3" />
                            <div>
                                <div>{product.minimumOrderQuantity + count}</div>

                                <button onClick={incrementCount}>+</button>
                                <button onClick={decrementCount}>-</button>
                            </div>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Confirm</label>
                                <label for="my-modal-6" class="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;