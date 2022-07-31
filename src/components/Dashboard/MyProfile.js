import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = (refetch) => {
    const [user, loading, error] = useAuthState(auth);

    const profile = event => {
        event.preventDefault();

        const profile = {
            userEmail: user.email,
            userName: user.displayName,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedInprofile: event.target.linkedInprofile.value
        }


        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                //to close the modal
                if (data.success) {
                    toast(` success,  ${user?.displayName || ''}`)
                    console.log(toast(`success, ${user?.displayName || ''} at ${user?.displayName || ''}`));
                }
                else {
                    toast.error(`Already on, ${user?.displayName || ''} at ${user?.displayName || ''}`)
                }
                console.log(data);
                refetch();



            })

    }
    return (
        <div>
            <h1 className='mx-auto text-2xl text-secondary flex justify-center my-5'>My Profile</h1>
            <div className='text-lg'>
                <form onSubmit={profile} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="linkedInprofile" placeholder="LinkedIn profile link" className="input input-bordered w-full max-w-xs" />


                    <label><input htmlFor="my-modal-6" type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" /></label>


                </form>


            </div>
        </div>
    );
};

export default MyProfile;