import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const { setuser } = useContext(UserContext)
    const handleonsubmit = (e) => {
        e.preventDefault();
        setuser({username, password});
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} />
            <input type="text" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={handleonsubmit} type="submit">
                Login
            </button>
        </div>
    )
}

export default login