import React from 'react'
import CoinItem from './CoinItem'
import "./AllCrypto.css"
import Coin from './Coin'
import { Link } from 'react-router-dom'

function Coins ({coins}){
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>

            {coins.map(coin=>{
                return(
                    <Link key={coin.id} to={`/coin/${coin.id}`} element={<Coin />}>
                        <CoinItem coins={coin} />
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Coins