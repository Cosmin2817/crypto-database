import React from 'react'
import "./Coin.css"

function CoinItem(props){
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='symbol'>
            <img src={props.coins.image} alt=""/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()} €</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
        <p className='hide'>{props.coins.total_volume.toLocaleString()} €</p>
        <p className='hide'>{props.coins.market_cap.toLocaleString()} €</p>
    </div>
  )
}

export default CoinItem