import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
const App = () => {
  return (
    <UserContextProvider>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App