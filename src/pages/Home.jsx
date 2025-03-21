import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import './styles.css'
// import StoreIcon from '@mui/icons-material/Store'
// import New from '../components/New'
import BarsDataset from '../components/BarsDataset'
// import PieChart from '../components/Pichart'
import GaugeChart from '../components/GaugeChart'
import Piechart2 from '../components/Pichart2'
// import { PieChart } from '@mui/x-charts/PieChart';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GaugeChart2 from '../components/GaugeChart2'
import GaugeChart3 from '../components/GaugeChart3'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import { TextField } from '@mui/material'

function Home({ setOpen }) {
  return (
    <div className='ok'>
      <Navbar setOpen={setOpen} />
      <Box
        sx={{
          width: '100%',
          padding: 2,
        }}
      >
        <SideNav />
        <Box

          sx={{
            flexGrow: 1,
            // p: 2,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 5,
            width: 100 + '%',
          }}
        >
          {/* <h1>Home</h1> */}

          <Stack direction={{ xs: 'column', md: 'row' }} marginBottom={2} marginTop={2} justifyContent="space-between" width="100%">
            <Card sx={{ width: { xs: '100%', md: 350 } ,marginTop:{xs: 2, md: 0} }}>
              <div className="px-6 flex flex-row items-center justify-between text-left p-3">
                <div className='flex flex-col '>

                  <h1 className="font-semibold text-lg">Visits</h1>
                  <p className="text-[10px] text-gray-500">Total visits today</p>
                  <div className='flex flex-row items-center justify-between'>
                    <p className="text-xl font-bold">4000</p>
                    <TrendingUpIcon sx={{ color: 'green' }} />
                    <p className="text-lg font-bold bg-green-500 rounded-2xl w-8 text-center text-[10px]">7%</p>

                  </div>
                  <a href="">Details</a>

                </div>
                <div>
                  <GaugeChart />
                </div>
              </div>
            </Card>
            {/* <Card
                  sx={{
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
                      width={300}
                      height={100}
                    />
                  </CardContent>
                </Card> */}
            <Card  sx={{ width: { xs: '100%', md: 350 },marginTop:{xs: 2, md: 0}  }}>
              <div className="px-6 flex flex-row items-center justify-between text-left p-3">
                <div className='flex flex-col '>

                  <h1 className="font-semibold text-lg">Orders</h1>
                  <p className="text-[10px] text-gray-500">Total visits today</p>
                  <div className='flex flex-row items-center justify-between'>
                    <p className="text-xl font-bold">1000</p>
                    <TrendingDownIcon sx={{ color: 'red' }} />
                    <p className="text-lg font-bold bg-red-500 rounded-2xl w-8 text-center text-[10px]">3%</p>

                  </div>
                  <a href="">Details</a>

                </div>
                <div>
                  <GaugeChart2 />
                </div>
              </div>
            </Card>
            {/* <Card
                  sx={{

                    color: 'white',
                    marginLeft: 2

                  }}
                  className='colo'
                >
                  <CardContent>
                    <GaugeChart />
                  </CardContent>
                </Card> */}

            <Card  sx={{ width: { xs: '100%', md: 350 },marginTop:{xs: 2, md: 0}  }}>
              <div className="px-6 flex flex-row items-center justify-between text-left p-3">
                <div className='flex flex-col '>

                  <h1 className="font-semibold text-lg">Sales</h1>
                  <p className="text-[10px] text-gray-500">Total visits today</p>
                  <div className='flex flex-row items-center justify-between'>
                    <p className="text-xl font-bold">$500</p>
                    <TrendingUpIcon sx={{ color: 'green' }} />
                    <p className="text-lg font-bold bg-green-500 rounded-2xl w-8 text-center text-[10px]">9%</p>

                  </div>
                  <a href="">Details</a>
                </div>
                <div>
                  <GaugeChart3 />
                </div>
              </div>
            </Card>
          </Stack>

          
              {/* <Card sx={{ width: 100 + '%', }}>
                <div>
                  <BarsDataset />

                </div>
              </Card> */}
              <Stack  direction={{ xs: 'column', md: 'row' }} marginBottom={2} marginTop={2} justifyContent="space-between" width="100%"> 
              <Card sx={{ width: { xs: '100%', md: '66.5%' }  }}>
                {/* Title and Filters */}
                <div className="flex justify-between items-center p-2">
                  <h2>Revenue</h2>
                  <div className="flex gap-2 items-center">

                    <select name="" id="" className='border border-gray-300 rounded-md p-1'>
                      <option value="weekly" className=''>01.12.18 / 07.12.18</option>
                    </select>
                    <select name="" id="" className='border border-gray-300 rounded-md p-1'>
                      <option value="weekly" className=''>Weekly</option>
                    </select>
                  </div>
                </div>

                {/* Current & Previous Week Stats */}
                <div className="flex justify-between p-2">
                  <div>
                    <p style={{ color: 'red', fontWeight: 'bold' }}>$180</p>
                    <p style={{ color: 'green' }}>+5%</p>
                  </div>
                  <div>
                    <p style={{ color: 'gray' }}>$52.30</p>
                    <p style={{ color: 'red' }}>-2%</p>
                  </div>
                </div>

                {/* Bar Chart */}
                <div>
                  <BarsDataset />
                </div>
              </Card>

        
              <Card sx={{  width: { xs: '100%', md: '32.5%' },  marginTop: { xs: '20px', md: '0px' }   }}>
                {/* <CardContent>
                  <Piechart2/>
                </CardContent> */}
                <div className='flex flex-col justify-between h-full '>
                  <div className='flex justify-between p-3'><h1>Profit</h1>
                    <p className='text-sm text-gray-500 font-bold'>...</p></div>
                  <div className='m-auto p-6'>
                    <Piechart2 />
                  </div>
                  <hr />
                  <div className='flex justify-between p-3'>
                    <div className='flex flex-col text-left'>
                      <p className='text-sm  font-bold'> <FiberManualRecordIcon sx={{ color: "red", fontSize: 12, marginRight: 1 }} />
                        Current</p>
                      <p className='text-sm  font-bold'><FiberManualRecordIcon sx={{ color: "blue", fontSize: 12, marginRight: 1 }} />Target</p>
                      <p className='text-sm  font-bold'> <FiberManualRecordIcon sx={{ color: "yellow", fontSize: 12, marginRight: 1 }} />Lost</p>
                    </div>
                    <div>
                      <p>$500 <span className=" text-xs">37%</span></p>
                      <p>$450 <span className=" text-xs">35%</span></p>
                      <p>$300 <span className=" text-xs">28%</span></p>
                    </div>
                  </div>
                </div>
              </Card>
              </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default Home
