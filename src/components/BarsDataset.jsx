// import * as React from 'react'
// import { BarChart } from '@mui/x-charts/BarChart'
// import { axisClasses } from '@mui/x-charts/ChartsAxis'
// import { dataset, valueFormatter } from './Dataset'

// const chartSetting = {
//   yAxis: [
//     {
//       label: 'rainfall (mm)',
//     },
//   ],
//   width: 700,
//   height: 300,
//   sx: {
//     [`.${axisClasses.left} .${axisClasses.label}`]: {
//       transform: 'translate(-10px, 0)'
//     }
//   }
// }

// export default function BarsDataset () {
//   return (
//     <BarChart
//     dataset={dataset}
//     xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
//     series={[
//       { dataKey: 'london', label: 'London', valueFormatter },
//       { dataKey: 'paris', label: 'Paris', valueFormatter },
//       { dataKey: 'newYork', label: 'New York', valueFormatter },
//       { dataKey: 'seoul', label: 'Seoul', valueFormatter },
//     ]}
//     {...chartSetting}
//   />
//   )
// }

import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BarsDataset() {
  const [connectNulls, setConnectNulls] = React.useState(true);

  return (
    <Stack sx={{ width: '100%' }}>
      <FormControlLabel
        checked={connectNulls}
        control={
          <Checkbox onChange={(event) => setConnectNulls(event.target.checked)} />
        }
        label="connectNulls"
        labelPlacement="end"
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
        series={[
          {
            data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
          },
          {
            data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
            connectNulls,
            area: true,
          },
        ]}
        height={250}
        margin={{ top: 10, bottom: 20 }}
        skipAnimation
      />
    </Stack>
  );
}

