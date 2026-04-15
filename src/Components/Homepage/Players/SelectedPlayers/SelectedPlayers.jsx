import React from "react";
import SelectedCard from "../../../UI/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin
}) => {
  console.log(selectedPlayers, "selectedPlayers");

  const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, "selectedPlayers");
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.player_name != player.player_name,
    );
    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };


  return (
    <div>
      {selectedPlayers.length === 0 ? 
      <div className="h-[100px] flex items-center justify-center flex-col gap-4">
        <h2 className="font-bold text-2xl">No Player Selected Yet</h2>
        <p>Go to available tab to select players</p>
      </div>
      : selectedPlayers.map((player, index) => {
        return (
          <SelectedCard 
          key={index}
          player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
