import React from 'react';
import Review from './Review';
import client1 from '../../images/Client/1.jpg'
import client2 from '../../images/Client/2.jpg'
import client3 from '../../images/Client/3.jpg'


const TopReviews = () => {
    const reviews = [{
        _id: 1, name: 'Kyoko Matsushita', reviw: "So far very pleased. They 're a bit dearer than my usual knippex or channelocks but seem much better.Time will tell!",
        location: 'Japan', img: client1
    },
    {
        _id: 2, name: 'Lar Bear', reviw: " I use these for wiring and they are sturdy, good value for the price. I bought them to replace my old ones that I had used for years.",
        location: 'USA', img: client2
    },
    { _id: 3, name: 'George Brooks', reviw: " Purchased these for my son who is starting his own tool collection. Very good quality , buy once cry once. They are large, nothing dainty about them. They will outlast me.", location: 'Califonia', img: client3 }]
    console.log(reviews);
    return (
        <section className='my-28 mx-auto px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary text font-bold">Client</h4>
                    <h2 className='text-3xl'>Top Reviews</h2>


                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default TopReviews;


