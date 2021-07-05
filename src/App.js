import React from "react";
import './App.css';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Agenda from './pages/Agenda';
import Servicos from './pages/Servicos';
import Login from './pages/Login';


function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Switch>
         <Route exact path="/"> <Home/></Route>
         <Route path="/sobre"><Sobre/></Route>
         <Route path="/agendar"><Agenda/></Route>
         <Route path="/servicos"><Servicos/></Route>
         <Route path="/nutri/login"><Login/></Route>
      </Switch>
      <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
