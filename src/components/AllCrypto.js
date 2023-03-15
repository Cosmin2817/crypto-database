import React from 'react'
import "../styles/AllCrypto.css"
import CoinItem from './CoinItem'
import Coin from './Coin'
import { Link } from 'react-router-dom'

function AllCrypto ({coins}){
    // console.log(coins)
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p className='hide'>Volume</p>
                <p className='hide'>Market Cap</p>
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

export default AllCrypto