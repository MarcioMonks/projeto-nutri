import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = () => {
   return (
      <>
         <StyledMenuSpace>
         <ul>
            <li>
               <Link 
                  className="nav-link" 
                  activeClassName="nav-link-active"
                  exact
                  to="/">Home
               </Link>
            </li>
            <li>
               <Link 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/sobre">Sobre
               </Link>
            </li>
            <li>
               <Link 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/agendar">Agendar Consulta
               </Link>
            </li>
            <li>
               <Link 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/servicos">Serviços
               </Link>
            </li>
            <li>
               <Link 
                  className="nav-link" 
                  activeClassName="nav-link-active" 
                  to="/nutri/login">@Nutri
               </Link>
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