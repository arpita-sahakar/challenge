import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function Main() {
    //State to capture all users
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/users").then(res => {
            // console.log(res.data);
            setUsers(res.data);
        });

    }, [])

    return (
        <div className="Main">
            <h1>All Users</h1>
            <p>Users and their age</p>
            <UserTable users={users} />
        </div>
    )
}

export default Main
