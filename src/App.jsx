import './App.css'
import NavBar from './components/NavBar'
import { Outlet} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import {useState, useEffect} from 'react'
import SkeletomComp from './components/SkeletomComp'
import FetchError from './components/FetchError'

function App() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // If env variable is missing, default to localhost:8000
const APIBaseurl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"

  // console.log(APIBaseurl)
  // console.log(import.meta.env)

  useEffect(()=>{
    async function handlefetch(url, setterFunc){
      try{
        const r  = await fetch(`${APIBaseurl}/${url}`)

        if(!r.ok){
          throw new Error(`Error status: ${r.status}`)
        }
        const data = await r.json()
        // console.log(`Data received: ${url}`, data)
        setterFunc(data)
      }catch(error){
        // console.error(error)
        setError(error.message)
      }
    }

    // when all promise are resolved
    Promise.all([
      handlefetch('users', setUsers),
      handlefetch('products', setProducts)
    ])
      .then(()=>{setLoading(true)})
      .catch(()=>{setLoading(true)})

  }, [APIBaseurl])

  // console.table(users)
  // console.table(products)

  function handleProfileEdit(e, formObj){
    const configObj={
      method:'PATCH',
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(formObj)
    }
  }

  return (
    <>
    {loading?<main>
      <Header users={users}/>
      <section className='main-wrapper'>
        <aside><NavBar/></aside>
        { error
          ?<FetchError error={error}/>
          :<Outlet context={{users:users, products:products}}/>
        }
      </section>
    </main>:<SkeletomComp/>}
    </>
  )
}

export default App
