import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = () => {
   return (
      <>
         <StyledMenuSpace>
         <ul>
            <li>
               <NavLink 
                  className="nav-link" 
                  activeClassName="nav-link-active"
                  exact
                  to="/">Home
               </NavLink>
            </li>
            <li>
               <NavLink 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/sobre">Sobre
               </NavLink>
            </li>
            <li>
               <NavLink 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/agendar">Agendar Consulta
               </NavLink>
            </li>
            <li>
               <NavLink 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/servicos">Serviços
               </NavLink>
            </li>
            <li>
               <NavLink 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/nutri/login">@Nutri
               </NavLink>
            </li>
         </ul>   
         </StyledMenuSpace>
         
      </>
   )
}

const StyledMenuSpace = styled.div`
   display: flex;
   align-items: center;
   
   ul,
   li {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   ul {
      display: flex;
   }

   .nav-link {
      margin: 5px;
      display: block;
      padding: 15px;
      text-decoration: none;
      border-radius: 10px;
      color: rgba(44, 46, 47, 0.835);
      font-weight: bold; 
      font-size: 1rem;
   }

   .nav-link-active {
      background-color: #ffbea5;
      display: block;
   
   }

   .nav-link:hover {
      border-bottom: 1px solid #ffbea5; 
   }
`

export default Menu;