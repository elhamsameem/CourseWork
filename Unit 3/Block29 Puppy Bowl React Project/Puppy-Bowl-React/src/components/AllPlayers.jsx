import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

function AllPlayers() {
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      //   console.log(allPlayers);
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);

  function render(player) {
    console.log(player.name);
    const name = player.name;
    return name;
  }

  return (
    <>
      <h1>All Players compo</h1>
      {players && (
        <div className="all-players">
          {players.map((player) => {
            return <p>{render(player)}</p>;
          })}
        </div>
      )}
    </>
  );
}

export default AllPlayers;
