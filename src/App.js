import React, {useState, useEffect} from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import AllCrypto from './components/AllCrypto';
import Coin from "./components/Coin";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
    const [coins, setCoins] = useState([])

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false"

    useEffect(()=>{
      axios.get(url).then((response)=>{
        setCoins(response.data)
        // console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }, [])
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCrypto coins={coins}/> }/>
        <Route path="/coin" element={<Coin />}>
          <Route path=":cryptoId" element={ <Coin /> }/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
