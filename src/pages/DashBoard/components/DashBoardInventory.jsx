import React from 'react'
import TableRender from './TableRender'

function DashBoardInventory({filteredProducts}) {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = filteredProducts.map(pro=>
        createData(pro.name, pro.sku, pro.stock, pro.demand_forecast)
    )
  return (
    <>
        <section className='dashboard-inventory-table'>
            <div>
                <TableRender rows={rows}/>
            </div>
        </section>
    </>
  )
}

export default DashBoardInventory