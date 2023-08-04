import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import "./AllPlayers.css";

function AllPlayers() {
  const [players, setPlayers] = useState(null);

  // Fethcing all players using a function from API folder
  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);

  return (
    <div className="all-players-container">
      <div className="all-players-title-bar">
        <h1>Players</h1>
      </div>
      <div className="all-players">
        {players ? (
          players.map((player) => {
            return (
              <>
                <div className="player-card" key={player.id}>
                  <h2 className="player-name">{player.name}</h2>
                  <div className="player-img-container">
                    <img src={player.imageUrl} alt="" />
                  </div>
                  <div className="buttons-div">
                    <button>See Details</button>
                    <button className="remove-button">Remove</button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>players not found</p>
        )}
      </div>
      <div className="all-players-footer">
        <button className="footer-buttons">View All Players!</button>
        <button className="footer-buttons">Add New Player</button>
      </div>
    </div>
  );
}

export default AllPlayers;
