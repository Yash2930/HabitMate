import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";

const App = () => {
  return (
    <BrowserRouter basename="/HabitMate">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week-view" element={<WeekView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;