import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://mighty-plains-36942.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })

            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfully made an admin')
                }
            })
    }
    return (

        <tr>

            <th> 1 </th>
            <td>{email}</td>
            <td>  {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs" >Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
            <ToastContainer />
        </tr>

    );
};

export default UsersRow;