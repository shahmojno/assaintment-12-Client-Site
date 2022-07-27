import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

    }
    return (
        <div>
            <h1 className='mx-auto text-2xl text-secondary justify-center  '>My Profile</h1>
            <div className='text-lg'>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="name" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="LinkedIn profile link" className="input input-bordered w-full max-w-xs" />


                    <label><input htmlFor="my-modal-6" type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" /></label>


                </form>


            </div>
        </div>
    );
};

export default MyProfile;