import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import './styles.css'
import StoreIcon from '@mui/icons-material/Store'
import New from '../components/New'
import BarsDataset from '../components/BarsDataset'

function Home ({ setOpen }) {
  return (
    <div className='ok'>
      <Navbar setOpen={setOpen} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          Height: 100 + '%'
        }}
      >
        <SideNav />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 2,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 5
          }}
        >
          {/* <h1>Home</h1> */}
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction='row' marginBottom={2}>
                <Card
                  sx={{
                    maxWidth: '90',
                    background:
                      'linear-gradient(135deg, #0d47a1, #1976d2, #26a69a, #2ecc71)',

                    color: 'white'
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarcticaa
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    maxWidth: 90 + '%',
                    color: 'white',
                    marginLeft: 2,
                    background: 'linear-gradient(45deg, #00c853, #b2ff59)'
                  }}
                  className='colo'
                >
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <Card
                  sx={{
                    maxWidth: 345,
                    background:
                      'linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5, #90caf9)'
                  }}
                >
                  <div className='div'>
                    <StoreIcon />
                    <span className='span'>200K</span>
                    <span>Total Income</span>
                  </div>
                </Card>
                <Card
                  sx={{
                    maxWidth: 345,
                    background:
                      'linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5, #90caf9)'
                  }}
                >
                  <div className='div'>
                    <StoreIcon />
                    <span className='span'> 400K</span>
                    <span>Total Income</span>
                  </div>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Card sx={{ height: 50 + 'vh' }}>
                <CardContent sx={{ marginLeft: 5 + '%' }}>
                  <BarsDataset />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 40 + 'vh' }}>
                <CardContent>
                  <New />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Home
