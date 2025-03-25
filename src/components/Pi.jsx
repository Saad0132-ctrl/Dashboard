import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import { useState, useEffect } from 'react';
// import { create } from '@mui/material/styles/createTransitions';
export default function Pi() {
  // const [count, setCount] = useState({
  //   electronic: 0,
  //   food: 0,
  //   beauty: 0
  // })

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("products"))
  //   const newCount = { electronic: 0, food: 0, beauty: 0 }

  //   data?.map((item) => {
  //     if (item.category === "Electronics") {
  //       newCount.electronic++
  //     }
  //     else if (item.category === "Food") {
  //       newCount.food++
  //     }
  //     else if (item.category === "Beauty") {
  //       newCount.beauty++;
  //     }
  //   })
  //   setCount(newCount)
  // }, [])

  const categories = JSON.parse(localStorage.getItem("category")) || []
  const products = JSON.parse(localStorage.getItem("products")) || []
  const count = {}
  categories?.map((item) => {
    count[item] = 0
  })
  products?.map((item) => {
    count[item.category]++
  })
  const data = categories?.map((item) => {
    return {
      id: item,
      value: count[item],
      label: item
    }
  })
  console.log(data)
  return (
    <PieChart
      series={[
        {
          data: data,
          // data: [
          //   { id: 0, value: `${count.electronic}`, label: 'Electronic' },
          //   { id: 1, value: `${count.food}`, label: 'Food' },
          //   { id: 2, value: `${count.beauty}`, label: 'Beauty' },
          // ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
