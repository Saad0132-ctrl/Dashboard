import React from 'react'
import { Box } from '@mui/material'

function Setting ({ setOpen }) {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          {' '}
          <h1>Setting</h1>
        </Box>
      </Box>
    </div>
  )
}

export default Setting
