
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Homepage/Banner/Banner'
import Players from './Components/Homepage/Players/Players';
import Player from './Components/Homepage/Players/Players';
import NavBar from './Components/Navbar/NavBar'

const fetchPlayer = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
const playersPromise = fetchPlayer();
const [coin, setCoin] = useState(10000000);
  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      
    </>
  );
}

export default App
