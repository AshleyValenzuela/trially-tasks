import React, { useState } from "react";
import AppCarousel from "./AppCarousel";
import Results from "./Results";
import { useNavigate } from 'react-router-dom'

const Main = (props) => {
  const navigate = useNavigate()
  const [showResults, setShowResults] = useState(false);
  return <> <AppCarousel navigate={navigate} setShowResults={setShowResults}/> </>;
};

export default Main;
