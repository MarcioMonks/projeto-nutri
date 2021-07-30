import React from "react";
import './App.css';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer/index';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Agenda from './pages/Agenda';
import Servicos from './pages/Servicos';
import Login from './pages/Login/';
import Nutri from "./pages/Nutri";
import QPC from './pages/QPC';


function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Switch>
               <Route exact path="/"> <Home /></Route>
               <Route path="/sobre"><Sobre /></Route>
               <Route path="/agendar"><Agenda /></Route>
               <Route path="/servicos"><Servicos /></Route>
               <Route path="/signin"><Login /></Route>
               <Route path="/nutri"><Nutri /></Route>
               <Route exact path="/questionario-pre-consulta"><QPC /></Route>
            </Switch>
            
            <Footer />
         </BrowserRouter>
      </>

   );
}

export default App;
