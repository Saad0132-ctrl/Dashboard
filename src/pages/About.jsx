import React from 'react'
import SideNav from '../components/SideNav'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'

function About ({ setOpen }) {
  return (
    <div>
      <Navbar setOpen={setOpen} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <img src="src\assets\image.webp" alt="" />
      </Box>
    </div>
  )
}

export default About
