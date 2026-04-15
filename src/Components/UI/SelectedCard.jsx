import React from 'react';
import userImage from "../../assets/user 1.png";
import deleteIcon from "../../assets/Vector.png" 


const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
      <div
        
        className="flex items-center gap-6 justify-between p-5 rounded-xl border mb-10"
      >
        <div className="flex items-center gap-6">
          <img
            className="h-[75px] w-auto rounded-md"
            src={player.player_image}
            alt={player.player_name}
          />
          <div>
            <h2 className="flex items-center justify-between font-bold gap-2 text-xl">
              <img src={userImage} alt="" /> {player.player_name}
            </h2>
            <p>{player.player_type}</p>
          </div>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => handleDeleteSelectedPlayer(player)}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    );
};

export default SelectedCard;