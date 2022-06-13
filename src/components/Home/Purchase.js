import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Purchase = () => {
    const { productId } = useParams();
    const [product] = ProductDetails(productId);

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name : {product.name}</p>

        </div>
    );
};

export default Purchase;