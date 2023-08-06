import React from "react";
import { useState } from "react";
import "./NewPlayerForm.css";
import { postNewPlayer } from "../API";

function NewPlayerForm() {
  const [playerCreated, setPlayerCreated] = useState(null);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function hangleSubmit(e) {
    e.preventDefault();
    // const newPlayer = new FormData(e.target);

    const newPlayer = {
      name,
      breed,
      status,
      imageUrl,
    };

    async function newPlayerCreation() {
      const data = await postNewPlayer(newPlayer);
      return data;
    }

    newPlayerCreation();
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
          <select name="status" id="status" required>
            <option>-- Select Status --</option>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <label htmlFor="imageUrl">
          Image URL:
          <input type="text" id="imageUrl" name="imageUrl" />
        </label>
        <button className="footer-buttons" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
