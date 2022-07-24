import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl underline-offset-1 font-bold  text-secondary ml-60 mt-5'> React Blogs</h1>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * Improve the performance of a React Application
                </div>
                <div class="collapse-content">
                    <p> 1. Using Immutable Data Structures.<br />

                        2. Function/Stateless Components and React.<br />

                        3. Multiple Chunk Files.<br />

                        4. Use React.<br />

                        5. Avoid Inline Function Definition in the Render Function.<br />

                        6. Throttling and Debouncing Event Action in JavaScript.<br />

                        7. Avoid using Index as Key for map.</p>
                </div>
            </div>


            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * React State to Manage
                </div>
                <div class="collapse-content">
                    <p> When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                        There are four main types of state you need to properly manage in your React apps:
                        <br />
                        Local state <br />
                        Global state<br />
                        Server state<br />
                        URL state<br />
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * Prototypal Inheritance
                </div>
                <div class="collapse-content">
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * Why you do not set the state directly in React
                </div>
                <div class="collapse-content">
                    <p> One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * What is a unit test?
                </div>
                <div class="collapse-content">
                    <p> Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props.
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ml-60 mr-60 mt-5">
                <div class="collapse-title text-xl font-medium text-primary font-bold">
                    * Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p> One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                    </p>
                </div>
            </div>


        </div >
    );
};

export default Blogs;