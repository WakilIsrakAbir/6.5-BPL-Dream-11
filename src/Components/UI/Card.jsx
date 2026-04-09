import React from 'react';
import userImage from '../../assets/user 1.png'
const Card = ({player}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
                      <figure className="px-10 pt-10">
                        <img
                          src={player.player_image}
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body ">
                        <h2 className="card-title">
                          {" "}
                          <img src={userImage} alt="" /> {player.player_name}
                        </h2>
                        <div className="flex justify-between text-center items-center">
                          <div className="flex gap-2 items-center">
                            country: <p> {player.player_country} </p>
                          </div>
                          <button className="btn">{player.player_type}</button>
                        </div>
                        <div className="divider"></div>
                        <h2 className="font-bold">Rating: {player.rating} </h2>
                        <div className="flex justify-between gap-3 font-bold">
                          <p> {player.batting_style} </p>
                          <p className='text-right'>{player.bowling_style}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-semibold">price: {player.price}</p>
                          <button className="btn">Choose Player</button>
                        </div>
                      </div>
                    </div>
    );
};

export default Card;