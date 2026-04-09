
import { Suspense } from 'react';
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
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App
