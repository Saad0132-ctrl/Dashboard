import React, { useEffect, useState } from 'react'
import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack
} from '@mui/material'
import Card from '@mui/material/Card'

function Product2 () {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData () {
      let output = await fetch('https://fakestoreapi.com/products')
      let res = await output.json()
      setData(res)
    }
    fetchData()
  }, [])
  return (
    <div className='product2'>
      <Box sx={{ p: 9 }}>
        <Grid
          container
          spacing={3}
          sx={
            {
              // display:'flex',
              // item: 'center',
              // justifyContent: 'center'
            }
          }
        >
          {data.map(item => (
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  bgcolor: '#f9f9f9',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              >
                <CardMedia
                  component='img'
                  height='100'
                  width='100'
                  image={item.image}
                  sx={{ objectFit: 'contain', padding: 2 }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ height: 50 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Price:{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Product2
