import React from 'react'
import SideNav from '../components/SideNav'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'

function Setting ({setOpen}) {
  return (
    <div >
      <Navbar  setOpen={setOpen}/>
      <Box sx={{ display: 'flex' }}>
        <SideNav />
       
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}> <h1>Setting</h1></Box>
      </Box>
    </div>
  )
}

export default Setting

