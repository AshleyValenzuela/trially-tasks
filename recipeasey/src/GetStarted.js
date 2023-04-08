import React, { useEffect, useState } from "react";
import axios from "axios";

const GetStarted = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      const { data } = await axios.get("api/recipes");
      console.log("frontend data", data);
      setRecipes(data);
    }
    fetchRecipes();
  }, []);
  return (
    <div>
      <h1>Get Started</h1>
      <form>
        <label htmlFor='cuisine'>Choose your cuisine type</label>
        <select name='cuisine' id='cuisine'>
          <option value='mexican'>Mexican</option>
           <option value='chinese'>Chinese</option>
        </select>
      </form>
    </div>
  );
};

export default GetStarted;
