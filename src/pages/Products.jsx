import React from 'react'
import { Box, Card } from '@mui/material'
import { Grid } from '@mui/material'

function Products () {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 345
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 345
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 345
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 345
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Card
            sx={{
              maxWidth: 100 + '%'
            }}
          >
            <div className='container'>
              <span className='span'>Product 1</span>
              <span>Price: 200k</span>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Products
