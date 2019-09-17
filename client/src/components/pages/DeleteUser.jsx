import axios from 'axios';
import BASE_URL from '../../constants';
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const DeleteUser = (props) => {
    
    console.log('ID to be deleted: ', props.user._id)
    const handleDelete = () => {
        let token = localStorage.getItem('authToken')
        console.log(token)
        axios.delete(`${BASE_URL}/profiles/`, props.user._id,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        )

        .then(response => {
            console.log(response)
            localStorage.removeItem('authToken')
            props.updateUser()
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        handleDelete();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <Redirect to="/" />
    )
}

export default DeleteUser;