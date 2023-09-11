import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerFOrm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/newPlayerForm" element={<NewPlayerForm />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
