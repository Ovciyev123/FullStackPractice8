import React from 'react'
import Usernavbar from '../Components/UserNavbar/Usernavbar'
import Userfooter from '../Components/UserFooter/Userfooter'
import { Outlet } from 'react-router'

function UserRoot() {
  return (
    <>
    <Usernavbar/>
    <Outlet/>
    <Userfooter/>
    
    
    </>
  )
}

export default UserRoot