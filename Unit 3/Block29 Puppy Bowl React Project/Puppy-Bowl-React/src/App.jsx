import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerFOrm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AllPlayers />
      <SinglePlayer />
      <NewPlayerForm />
    </>
  );
}

export default App;
