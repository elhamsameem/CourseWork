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
  const [errorMsg, setErrorMsg] = useState(null);

  function hangleSubmit(e) {
    e.preventDefault();
    const newPlayer = {
      name,
      breed,
      status,
      imageUrl,
    };

    async function newPlayerCreation() {
      const data = await postNewPlayer(newPlayer);
      setPlayerCreated(data.success);
      !data.success && setErrorMsg(data.error.message);
    }

    newPlayerCreation();
  }

  return playerCreated ? (
    <div className="new-player-form-div">
      <h1>Player has been created!</h1>
      <button
        className="footer-buttons"
        onClick={() => {
          setPlayerCreated(null);
          setErrorMsg(null);
          setName("");
          setBreed("");
          setStatus("");
          setImageUrl("");
        }}
      >
        Okay
      </button>
    </div>
  ) : (
    <div className="new-player-form-div">
      <h1>New Player Form</h1>
      <form id="new-player-form" onSubmit={hangleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="breed">
          Breed:
          <input
            type="text"
            id="breed"
            name="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="status">
          Status:
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            required
          >
            <option> -- Select Status --</option>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <label htmlFor="imageUrl">
          Image URL:
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            required
          />
        </label>
        <button className="footer-buttons" type="submit">
          Submit
        </button>
      </form>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}

export default NewPlayerForm;
