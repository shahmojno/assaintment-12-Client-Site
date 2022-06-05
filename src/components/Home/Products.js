
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [tools, settools] = useState([]);
    useEffect(() => {
        fetch('https://secure-crag-00162.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => settools(data));
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center '>
                <h2 className='text-primary text-x1 font-bold uppercase'>Our Services</h2>
                <h2 className='text-4xl'>Services We Provide</h2>
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