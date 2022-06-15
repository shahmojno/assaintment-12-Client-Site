import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Purchase = () => {
    const { productId } = useParams();
    const [product] = ProductDetails(productId);
    console.log(product);



    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <h2 class="card-title">{product.name}</h2>
            <figure><  img src={product.img} className="w=400&h=225" alt="" /></figure>
            <div class="card-body">

                <p>Description : {product.description}</p>
                <p>Price : {product.pricePerUnit}</p>
                <p>Available QT : {product.availableQuantity}</p>
                <p>Minimum Order QT : {product.minimumOrderQuantity}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>




    );
};

export default Purchase;