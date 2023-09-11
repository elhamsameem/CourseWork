import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer, removePlayer } from "../API";
import "./SinglePlayer.css";

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchPlayer() {
      const singlePlayer = await fetchSinglePlayer(params.id);
      setPlayer(singlePlayer);
    }
    fetchPlayer();
  }, []);

  // Remove player funciton
  async function deletePlayer(playerId) {
    const response = await removePlayer(playerId);
    setPlayer(null);
  }

  return player ? (
    <>
      <div className="single-player-div">
        <h1 className="single-player-h1">Player Details</h1>
        <div className="player-image-div">
          <img src={player.imageUrl} alt="Player Image Not Found" />
        </div>
        <div className="player-details-div">
          <ul>
            <li>ID: {player.id}</li>
            <li>Name: {player.name}</li>
            <li>Breed: {player.breed}</li>
            <li>Status: {player.status}</li>
            <li>Team ID: {player.teamId ? player.teamId : "N/A"}</li>
          </ul>
        </div>
        <div className="buttons-div">
          <button
            onClick={() => {
              history.back();
            }}
          >
            Go Back
          </button>
          <button
            className="remove-button"
            onClick={() => deletePlayer(player.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="single-player-div">Player not found</div>
  );
}

export default SinglePlayer;
