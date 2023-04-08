import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const Result = () => {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const location = useLocation();
  const { cuisineType, mealTime, mealType } = location.state.query;

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post("/api/recipes", {
        cuisineType,
        mealTime,
        mealType,
      });

      console.log("data front end", data);
      setResults(data);
      setLoading(false);
    }
    fetchData();
  }, [cuisineType, mealTime, mealType]);

  return (
    <div>
      {loading && cuisineType !== undefined ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <h1 style={{ marginBottom: "1rem" }}>
            Recipes ideas coming right up!
          </h1>

          <Spinner
            style={{ marginTop: "1rem" }}
            animation="border"
            variant="success"
          />
        </div>
      ) : results.length ? (
        <div>
          <h1>Results for {`${cuisineType}, ${mealType}, ${mealTime}`} </h1>
          <br />
          {results.map((recipe) => {
            return (
              <div key={recipe.id} className="my-div">
                <div className="results results-flex">
                  <h1 className="font-for-results">{recipe.title}</h1>
                  <br />
                  <img className="circular-edge" src={recipe.image}></img>
                </div>
              </div>
            );
          })}
          <br />
          <button onClick={handleClick}>Back</button>{" "}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <h1>{`Could not find recipes for ${cuisineType} cuisine within the ${mealType} and ${mealTime} categories :(. `}</h1>
        </div>
      )}
    </div>
  );
};

export default Result;
