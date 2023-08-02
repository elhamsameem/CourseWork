import React, { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const userLogin = {
    username: username,
    password: password,
  };

  function validateForm() {
    setSuccessMessage(null);

    if (username.length < 8) {
      setError("Username must be at least 8 characters long.");
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        `Password must be at least 8 characters long, contain at least one capital letter and one numeric digit.`
      );
      return false;
    }

    setError(null);
    return true;
  }

  async function handleSubmit(event) {
    // prevent the page from reloading
    event.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    //   send a POST method to the API to receive token
    try {
      const response = await fetch(
        `https://fsa-jwt-practice.herokuapp.com/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userLogin),
        }
      );
      const result = await response.json();
      setToken(result.token);
      setSuccessMessage(result.message);
      console.log(result);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="signup-form">
      <h2>Sign Up Form</h2>

      {successMessage && (
        <p className="success-message">
          {successMessage}{" "}
          <p>
            Please click on the <b>Authenticate Token</b> button below for
            authentication
          </p>
        </p>
      )}

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:{" "}
          <input
            type="text"
            id="username"
            minLength={8}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              validateForm();
            }}
            required
          />
        </label>
        <br /> <br />
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            minLength={8}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              validateForm();
            }}
            required
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
