import React from 'react';

const Product = ({ product }) => {


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt="Shoes" className="rounded-xl width-50%" />
            </figure>
            <div className="card-body items-center text-center">

                <h1>Name : {product.name}</h1>
                <h3>Price Per Unit : {product.pricePerUnit}</h3>
                <h3>Available Quantity : {product.availableQuantity}</h3>
                <h3>Minimum Order Quantity : {product.minimumOrderQuantity}</h3>




                <p>Description :{product.description}</p>

            </div>
        </div>
    );
};

export default Product;