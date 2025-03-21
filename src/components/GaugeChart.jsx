import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
  width: 140,
  height: 150,
  value: 60,
};

export default function GaugeChart() {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      thickness={8}
      sx={() => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 24,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: 'blue',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: 'gray', 
        },
      })}
      
    >
       <text 
        x="50%" 
        y="65%" 
        textAnchor="middle" 
        fontSize="12" 
        fill="white" 
        fontWeight="bold"
      >
        New Visits
      </text>
      </Gauge>
  );
}
