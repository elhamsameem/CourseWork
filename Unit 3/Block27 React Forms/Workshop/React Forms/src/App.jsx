import React from "react";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="form-div">
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;
