import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, pricePerUnit, availableQuantity, minimumOrderQuantity } = product;

    const navigate = useNavigate();
    const navigateDetails = id => {
        navigate(`/tools/${_id}`);


    }


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-40 w-32" />
            </figure>
            <div className="card-body items-center text-center">

                <h1>Name : {name}</h1>
                <h3>Price Per Unit : {pricePerUnit}</h3>
                <h3>Available Quantity : {availableQuantity}</h3>
                <h3>Minimum Order Quantity : {minimumOrderQuantity}</h3>
                <p>Description :{description}</p>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal-6"
                        onClick={() => navigateDetails(_id)}
                        className="btn  btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Order Now</label>




                </div>

            </div>
        </div>
    );
};

export default Product;