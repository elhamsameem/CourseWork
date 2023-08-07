import React, { useState, useEffect } from "react";
import { fetchAllPlayers, removePlayer } from "../API";
import { useNavigate } from "react-router-dom";
import "./AllPlayers.css";

function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(null);
  const [searchedPlayer, setSearchedPlayer] = useState("");

  // Fetching all players using a function from API folder
  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, [players]);

  // Remove player function
  async function deletePlayer(playerId) {
    const response = await removePlayer(playerId);
  }

  // Filter players based on the search input
  const filteredPlayers = players
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchedPlayer.toLowerCase())
      )
    : [];

  return (
    <div className="all-players-container-1">
      <div className="all-players-title-bar-1">
        <h1>Players</h1>
        <input
          className="player-search-bar"
          type="text"
          placeholder="Search Player Name"
          value={searchedPlayer}
          onChange={(e) => setSearchedPlayer(e.target.value)}
        />
      </div>
      <div className="all-players-1">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div className="player-card" key={player.id}>
              <h2 className="player-name">{player.name}</h2>
              <div className="player-img-container">
                <img src={player.imageUrl} alt="Image Not Found" />
              </div>
              <div className="buttons-div">
                <button
                  onClick={() => {
                    navigate(`/players/${player.id}`);
                  }}
                >
                  See Details
                </button>
                <button
                  className="remove-button"
                  onClick={() => {
                    deletePlayer(player.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No players found</h1>
        )}
      </div>
      <div className="all-players-footer">
        <button
          className="footer-buttons"
          onClick={() => {
            navigate("/newPlayerForm");
          }}
        >
          Add New Player
        </button>
      </div>
    </div>
  );
}

export default AllPlayers;
