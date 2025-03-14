import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideNav from './SideNav'

function Layout() {
  return (
    <div>
      <Navbar/>
      <SideNav/>
      <Outlet />
      
    </div>
  )
}

export default Layout
