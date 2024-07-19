import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AllProjects from "./components/AllProjects"
import BYou from "./components/BYou";
import RCube from "./components/RCube";
import Dictionary from "./components/Dictionary";
import ToDoTower from "./components/ToDoTower";
import BookishJourney from "./components/BookishJourney";
import About from './components/About';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/about' Component={About}></Route>
      <Route exact path='/projects' Component={AllProjects}></Route>
      <Route exact path='/projects/byou' Component={BYou}></Route>
      <Route exact path='/projects/rcube' Component={RCube}></Route>
      <Route exact path='/projects/dictionary' Component={Dictionary}></Route>
      <Route exact path='/projects/todotower' Component={ToDoTower}></Route>
      <Route exact path='/projects/bookishjourney' Component={BookishJourney}></Route>
    </Routes>
  );
}

export default Main;