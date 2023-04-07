import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from './Main';
import GetStarted from './GetStarted'
import Results from './Results'

const RoutesComponent = (props) => {
  return (
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path='/getStarted' element={<GetStarted />}/>
        <Route path='/results' element={<Results />} />
      </Routes>
  );
};

export default RoutesComponent;
