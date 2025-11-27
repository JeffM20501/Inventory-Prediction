import React from 'react'
import { Bar, BarChart, ResponsiveContainer, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'

function Barchart({products}) {
    const chartData = Object.entries(products.reduce((sum, pro)=>{
        const cat = pro.category||"Uncategorized"
        sum[cat]=(sum[cat]||0)+(pro.stock||0)
        return sum
    },{}))
    const mappedChartData=chartData.map(([category, totalStock])=>({
        category,
        totalStock
    }))
    console.log("mapped", mappedChartData)
  return (
    <ResponsiveContainer height={600} width='100%'>
        <BarChart margin={{ top: 20, right: 30, left: 20, bottom: 70 }}  data={mappedChartData}>
            <CartesianGrid strokeDasharray="5 5"/>
            <XAxis dataKey="category" />
            <YAxis/>
            <Legend/>
            <Bar 
                fill='var(--color)'
                stroke='var(--hover)' 
                dataKey="totalStock" 
                name="Total Stock by Category"/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default Barchart