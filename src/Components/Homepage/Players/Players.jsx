
import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Players = ({ playersPromise, setCoin, coin }) => {
  // console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType, "selectedType");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="w-[90%] mx-auto">
      {/* <p>Players: {players.length} </p> */}

      <div className="flex justify-between items-center text-center my-5">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div className="flex row-reverse">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-green-500" : "bg-gray-400"} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-green-500" : "bg-gray-400"} rounded-l-none`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;