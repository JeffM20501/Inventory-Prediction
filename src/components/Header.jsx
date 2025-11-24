import React from 'react'
import IPSC from '../assets/logo.png'
import './css/Header.css'

function Header() {
  return (
    <header className='main-header'>
        <div className='main-header-logo'>
            <img src={IPSC}/>
            <p>Inventory Prediction and Supply Chain- (IPSC)</p>
        </div>
        <div>
          <div className='header-user-profile'>
            
          </div>
        </div>
    </header>
  )
}

export default Header