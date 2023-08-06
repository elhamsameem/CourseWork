import React from "react";
import { useState } from "react";
import "./NewPlayerForm.css";

function NewPlayerForm() {
  const [playerCreated, setPlayerCreated] = useState(null);
  // setPlayerCreated(null);

  function hangleSubmit(e) {
    e.preventDefault();
    const newPlayer = new FormData(e.target);
    console.log(newPlayer);
    newPlayer.forEach((value, key) => {
      console.log(key, value);
    });

    setPlayerCreated(true);
  }

  return playerCreated ? (
    <div className="new-player-form-div">
      <h1>Player has been created!</h1>
      <button className="footer-buttons" onClick={() => setPlayerCreated(null)}>
        Okay
      </button>
    </div>
  ) : (
    <div className="new-player-form-div">
      <h1>New Player Form</h1>
      <form id="new-player-form" onSubmit={hangleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="breed">
          Breed:
          <input type="text" id="breed" name="breed" />
        </label>
        <label htmlFor="status">
          Status:
          <input type="text" id="status" name="status" />
        </label>
        <label htmlFor="imageUrl">
          Image URL:
          <input type="text" id="imageUrl" name="imageUrl" />
        </label>
        <label htmlFor="teamId">
          Team ID:
          <input type="text" id="teamId" name="teamId" />
        </label>
        <button className="footer-buttons" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
