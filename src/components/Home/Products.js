
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [tools, settools] = useState([]);
    useEffect(() => {
        fetch('https://mighty-plains-36942.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => settools(data));
    }, [])
    return (
        <div className='my-20 mx-auto px-12'>
            <div className='text-center '>
                <h1 className='text-primary text-4xl font-bold uppercase'>Our Products</h1>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(product => <Product
                        key={product._id} product={product}>

                    </Product>)
                }



            </div>
        </div>
    );
};

export default Products;