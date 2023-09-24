import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state acording to local storage id and set it on habit
  let habit = {};
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <div className="Week-View-Container">
    <div className="gap"></div>
    <div id="app-title">
        <img src="https://cdn-icons-png.flaticon.com/128/282/282803.png" alt="Logo" />
        <a href="/">
          <span id="firstpart">HABITMATE</span> <span id="secondpart"></span>
        </a>
      </div>
    
      <Navbar name="Week View" /> 
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
     
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="backtohome" type="button">
          <Link to="/" className="link-text">
         BACK TO HOME
          </Link>
        </button>
      </div>
    </div>
  );
};

export default WeekView;
