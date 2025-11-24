import './App.css'
import NavBar from './components/NavBar'
import { Outlet} from 'react-router-dom'
import './index.css'
import Header from './components/Header'


function App() {
  return (
    <>
      <Header/>
      <main className='main-wrapper'>
        <aside><NavBar/></aside>
        <Outlet/>
      </main>
    </>
  )
}

export default App
