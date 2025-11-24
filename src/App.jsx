import './App.css'
import NavBar from './components/NavBar'
import { Outlet} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import { baseUrl } from './api'
import {useState, useEffect} from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(()=>{
    async function handlefetch(url, setterFunc){
      try{
        const r  = await fetch(`${baseUrl}/${url}`)
        const data = await r.json()
        setterFunc(data)
      }catch(error){console.error(error)}
    }
    handlefetch('users', setUsers)
    handlefetch('products', setProducts)
  }, [])

  // console.table(users)
  // console.table(products)

  return (
    <>
      <Header users={users}/>
      <main className='main-wrapper'>
        <aside><NavBar/></aside>
        <Outlet context={{users:users, products:products}}/>
      </main>
    </>
  )
}

export default App
