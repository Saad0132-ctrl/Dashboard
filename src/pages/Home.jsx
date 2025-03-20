import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import './styles.css'
import StoreIcon from '@mui/icons-material/Store'
import New from '../components/New'
import BarsDataset from '../components/BarsDataset'
import { PieChart } from '@mui/x-charts/PieChart';
import GaugeChart from '../components/GaugeChart'

function Home({ setOpen }) {
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
                    background:
                      'linear-gradient(135deg, #0d47a1, #1976d2, #26a69a, #2ecc71)',
                    color: 'white'
                  }}
                >
                  <CardContent>
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </CardContent>
                </Card>

                <Card
                  sx={{

                    color: 'white',
                    marginLeft: 2,
                    background: 'linear-gradient(45deg, #00c853, #b2ff59)'
                  }}
                  className='colo'
                >
                  <CardContent>
                    <GaugeChart />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={1}>
                <Card
                  sx={{
                    height:'6rem',                   background:
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
                    height:'6rem', 
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
            <Grid xs={8} >
              <Card sx={{ width: 100 + '%', }}>
                <CardContent>
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
