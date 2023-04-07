import React from "react";

const MealPrepTimeForm = (props) => {
  const setMealTime = props.setMealTime;
  const handleChange = (e) => {
    let selectedTime = e.target.value;
    setMealTime(selectedTime);
  };
  return (
    <form className="flex-for-form">
      <label htmlFor="time"></label>
      <select name="time" id="time" onChange={handleChange}>
      <option value="select">select</option>
        <option value="5mins">5 mins</option>
        <option value="15mins">15 mins</option>
        <option value="30mins">30 mins</option>
        <option value="45mins">45 mins</option>
        <option value="1hr+">1 hour+</option>
      </select>
    </form>
  );
};

export default MealPrepTimeForm;
