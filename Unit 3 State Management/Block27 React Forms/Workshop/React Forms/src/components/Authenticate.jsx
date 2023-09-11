import React from "react";
import { useState } from "react";

function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  console.log("Token: ", token);

  async function handleClick() {
    try {
      const response = await fetch(
        `https://fsa-jwt-practice.herokuapp.com/authenticate`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log("Authentication Result: ", result);
      if (result.message === "jwt malformed") {
        setError("Token not found. Please fill out the form!");
        setSuccessMessage(null);
      } else if (result.message === "Correctly Authenticated!") {
        setSuccessMessage(result.data.username + " has been " + result.message);
        setError(null);
      } else {
        setSuccessMessage(result.message);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
    setToken(null);
  }
  return (
    <div className="authentication-div">
      <h2>Authentication</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}

      {error && <p className="error-message">{error}</p>}

      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

export default Authenticate;
