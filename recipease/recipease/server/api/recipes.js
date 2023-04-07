const axios = require("axios");
require("dotenv").config();
const recipesRouter = require("express").Router();
const apiKey = process.env.API_KEY;

const removeMins = (mealTime) => {
  let result = []
  for (let i = 0; i < mealTime.length; i++) {
    let curElem = mealTime[i]
    if (!isNaN(parseInt(curElem))) {
      result.push(curElem)
    }
  }
  return result.join('')
} 

recipesRouter.post("/", async (req, res, next) => {
  try {
    console.log("backend =>>>>", req.body);

    let { cuisineType, mealType, mealTime } = req.body;
  
    mealTime = removeMins(mealTime)
    console.log('meal time', mealTime)


    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisineType}&maxReadyTime=${mealTime}&type=${mealType}`
    );
    console.log('data in backend', data)
    res.send(data.results);
  } catch (error) {
    next(error);
  }
});

module.exports = recipesRouter;
