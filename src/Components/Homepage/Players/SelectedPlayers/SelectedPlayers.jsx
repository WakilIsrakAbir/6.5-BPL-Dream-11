import React from "react";

const SelectedPlayers = ({ selectedPlayers }) => {
  console.log(selectedPlayers, "selectedPlayers");
  return <div>
    {
      selectedPlayers.map((player, index) => {
        return (
          <div key={index}>
            <div></div>
            <button>
              
            </button>
          </div>
        );
      })
    }
  </div>;
};

export default SelectedPlayers;
