import React from 'react'
import { Bar, BarChart, ResponsiveContainer, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'
import { useMemo } from 'react'

function Barchart({products}) {
    const mappedChartData = useMemo(() => {
        const chartData = Object.entries(products.reduce((sum, pro)=>{
            const cat = pro.category||"Uncategorized"
            sum[cat]=(sum[cat]||0)+(pro.stock||0)
            return sum
        },{}))
        
        return chartData.map(([category, totalStock])=>({
            category,
            totalStock
        }))
    }, [products]) // Re-run only when products change

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

export default React.memo(Barchart) // memorize the comp