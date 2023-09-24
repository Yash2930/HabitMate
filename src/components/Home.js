import React from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";



const Home = () => {
  return (
    <div className="contanier">
      <div id="app-title">
        <img src="https://cdn-icons-png.flaticon.com/128/282/282803.png" alt="Logo" />
        <a href="/">
          <span id="firstpart">TRACK</span> <span id="secondpart">it</span>
        </a>
      </div>
      <Navbar />
      <Habits />
   
    </div>
  );
};

export default Home;
