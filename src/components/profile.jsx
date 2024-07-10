import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const profile = () => {
    const { user } = useContext(UserContext);
    if (user) return <div>
        welcome {user.username}
    </div>
    else
        return <h1>User not exist</h1>
}

export default profile