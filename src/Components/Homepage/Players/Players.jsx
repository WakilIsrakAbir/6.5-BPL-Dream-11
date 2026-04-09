
import { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Players = ({ playersPromise }) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selectedType");

  return (
    <div className="w-[90%] mx-auto">
      {/* <p>Players: {players.length} </p> */}

      <div className="flex justify-between items-center text-center my-5">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">Selected Players</h2>
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
            Selected(0)
          </button>
        </div>
      </div>

      { selectedType === "available" ? <AvailablePlayers players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers> }
    </div>
  );
};

export default Players;