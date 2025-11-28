import './App.css'
import NavBar from './components/NavBar'
import { Outlet} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import { baseUrl } from './api'
import {useState, useEffect} from 'react'
import SkeletomComp from './components/SkeletomComp'

function App() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function handlefetch(url, setterFunc){
      try{
        const r  = await fetch(`${baseUrl}/${url}`)
        const data = await r.json()
        setterFunc(data)
        setLoading(true)
      }catch(error){console.error(error)}
    }
    handlefetch('users', setUsers)
    handlefetch('products', setProducts)
  }, [])

  console.table(users)
  // console.table(products)

  return (
    <>
    {loading?<main>
      <Header users={users}/>
      <section className='main-wrapper'>
        <aside><NavBar/></aside>
        <Outlet context={{users:users, products:products}}/>
      </section>
    </main>:<SkeletomComp/>}
    </>
  )
}

export default App
