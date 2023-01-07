import React, { useEffect, useState } from "react";
// import './App.css';
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid, StepLabel } from "@material-ui/core";
import Main from "./pages/Main";
import Welcome from "./pages/WelcomePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/travel-advisor" element={<Main />} />
      <Route path="*" element={<Welcome />}></Route>
    </Routes>
  );
}

export default App;
