import React, {useState, useEffect} from 'react'
import "../styles/Coin.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'


function Coin() {
    const params = useParams()
        // console.log(params)
    const [coin, setCoin] = useState({})
    
    const url = `https://api.coingecko.com/api/v3/coins/${params.cryptoId}`

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoin(response.data)
            // console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <div>
        <div className='coin-container'>
            <div className='content'>
                <h1>{coin.name}</h1>
            </div>
            <div className='content'>
                <div className="rank">
                    <span className='rank-text'>Rank # {coin.market_cap_rank} </span>
                </div>
                <div className='info'>
                    <div className='coin-heading'>
                        {coin.image ? <img src={coin.image.small} alt=""/> : null}
                        <p>{coin.name}</p>
                        <p>{coin.symbol}</p>
                    </div>
                    <div className='coin-price'>
                       {coin.market_data ? <h2>{coin.market_data.current_price.eur.toLocaleString()} €</h2> : null} 
                    </div>
                </div>
            </div>
            <div className='content'>
                <table>
                    <thead>
                        <tr>
                           <th>1h</th>  
                           <th>24h</th>  
                           <th>7 days</th>  
                           <th>14 days</th>  
                           <th>30 days</th>  
                           <th>1 year</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(2)} %</td> : null} 
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(2)} %</td> : null} 
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(2)} %</td> : null} 
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(2)} %</td> : null}  
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(2)} %</td> : null} 
                          {coin.market_data ? <td>{coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(2)} %</td> : null} 
                        </tr>
                    </tbody>
                </table>
            </div>
        <div className='content'>
            <div className='stats'>
                <div className='left'>
                    <div className='row'>
                        <h4>24 Hour Low</h4>
                        {coin.market_data ? <p>{coin.market_data.low_24h.eur.toLocaleString()} €</p> : null }
                    </div>
                    <div className='row'>
                        <h4>24 Hour High</h4>
                        {coin.market_data ? <p>{coin.market_data.high_24h.eur.toLocaleString()} €</p> : null }
                    </div>
                </div>
                <div className='right'>
                <div className='row'>
                        <h4>Market Cap</h4>
                        {coin.market_data ? <p>{coin.market_data.market_cap.eur.toLocaleString()} €</p> : null }
                    </div>
                    <div className='row'>
                        <h4>Circulating Supply</h4>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null }
                    </div>
                </div>
            </div>
        </div>   
        <div className='content'>
            <div className='about'>
                <h3>About</h3>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(coin.description ? coin.description.en : "")
                }}>
                </p>
                {/* <p>{coin.description ? coin.description.en : ""}</p> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Coin