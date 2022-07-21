import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mx-10'>

                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* Improve the performance of a React Application</h1>

                <text>
                    1. Using Immutable Data Structures.<br />

                    2. Function/Stateless Components and React.<br />

                    3. Multiple Chunk Files.<br />

                    4. Use React.<br />

                    5. Avoid Inline Function Definition in the Render Function.<br />

                    6. Throttling and Debouncing Event Action in JavaScript.<br />

                    7. Avoid using Index as Key for map.

                </text>
            </div>

            <div className='mx-10'>

                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* React State to Manage</h1>

                <text>
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                    There are four main types of state you need to properly manage in your React apps:
                    <br />
                    Local state <br />
                    Global state<br />
                    Server state<br />
                    URL state<br />

                </text>
            </div>
            <div className='mx-10'>

                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* Prototypal Inheritance</h1>

                <text>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </text>
            </div>

            <div className='mx-10'>

                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* Why you do not set the state directly in React</h1>

                <text>
                    One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.

                </text>
            </div>

            <div className='mx-10'>

                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* What is a unit test?</h1>

                <text>
                    Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props.

                </text>
                <h1 className='text-xl mx-auto mt-4 mb-2 text-primary font-bold'>* Why should write unit tests?</h1>

                <text>
                    One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.

                </text>
            </div>

        </div >
    );
};

export default Blogs;