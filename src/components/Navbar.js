import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";


const Navbar = ({ submitForm ,habitform,cancelform}) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();
  const [habitName, setHabitName] = useState("");

  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // function for add habit
  const handleSave = () => {

    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    setHabitName("");
  };

  
  const handleInputChange = (event) => {
    setHabitName(event.target.value); // Update the habitName state as the user types
  };

  return (
    <>
      <div className="navbar">
        {/* according to time it shows morning, afternoon, evening, and night */}
        {hour <= 12 ? (
          <div>
            Good morning!
            <br />
            Seize the day and master your habits.
          </div>
        ) : hour <= 17 ? (
          <div>
            Afternoon alert!
            <br />
            Stay on track with your habits.
          </div>
        ) : hour <= 21 ? (
          <div>
            Good evening!
            <br />
            Elevate your habits and conquer the day.
          </div>
        ) : (
          <div>
            Nighttime focus!
            <br />
            Reflect and level up your habits.
          </div>
        )}
         
        <div className="right-nav">
          <div className="navbar-addhabit">
            <img src="https://cdn-icons-png.flaticon.com/128/10473/10473587.png" alt="addhabit" />
          </div>
          <button
          onClick={submitForm}
            className="addhabit-btn"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      {habitform &&
        <div
        className="HabitForm"  
         >
          <div className="habit-form-Container">
          <div className="habit-form-header">
              <h3>Add your habit and keep track</h3>
              <img onClick={cancelform} className="cancel-image" src="https://cdn-icons-png.flaticon.com/128/9247/9247838.png"></img>
            </div>
              <div className="input-filed">
                <input className="input-save"
                  type="text"
                  placeholder="Enter habit name"
                  value={habitName} 
                 onChange={handleInputChange}
                />
                 <button className="save-btn" onClick={handleSave}>Save</button>
              </div>

             
              
             
          
            </div>
          
          </div>
       
     
      }
      
    </>
  );
};

export default Navbar;
