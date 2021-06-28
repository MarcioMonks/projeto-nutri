import React from "react";
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Agenda from './pages/Agenda';
import Servicos from './pages/Servicos';
import Login from './pages/Login';


function App() {
  return (
     <Router>
         <div className="App">
           
            <Header/>
            <Route exact path="/"> <Home/></Route>
            <Route path="/sobre"><Sobre/></Route>
            <Route path="/agendar"><Agenda/></Route>
            <Route path="/servicos"><Servicos/></Route>
            <Route path="/nutri/login"><Login/></Route>
            <Footer/>
         </div>
     </Router>
    
  );
}

export default App;
