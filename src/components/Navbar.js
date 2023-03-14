import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div className='navbar'>
        <Link to="/">
        <CurrencyBitcoinIcon className='icon' />
        </Link>
        <Link to="/">
            <h1 className='crypto'> Crypto <span className="database"> Database</span></h1>
        </Link>
    </div>
  )
}

export default Navbar