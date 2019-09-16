import axios from 'axios';
import BASE_URL from '../../constants';
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const DeleteUser = (props)=> {
    const handleDelete = () => {
        axios.delete(`${BASE_URL}/profiles/`, this.props.user._id)
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