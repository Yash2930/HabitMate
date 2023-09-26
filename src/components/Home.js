import React, { useState } from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";



const Home = () => {
  const [habitform,setHabitForm]=useState(false);
  function submitForm (){
    setHabitForm(true);
 
  }
  function cancelform(){
    setHabitForm(false);
  }
  return (
    <div className="contanier">
      <div id="app-title">
        <img src="https://cdn-icons-png.flaticon.com/128/282/282803.png" alt="Logo" />
        <a href="/">
          <span id="firstpart">TRACK</span> <span id="secondpart">it</span>
        </a>
      </div>
      <Navbar submitForm={submitForm} habitform={habitform} cancelform={cancelform}/>
      <Habits />
   
    </div>
  );
};

export default Home;
