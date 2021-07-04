import React from 'react';
import { NavLink } from 'react-router-dom';
import {
   HeaderSpace,
   HeaderContainer,
   Logo,
   LogoText,
   Menu
} from './styled';

export default function header() {
   return (
      <HeaderSpace>
         <HeaderContainer>
            <Logo>
               <LogoText>Clínica Coma Saúde</LogoText>
            </Logo>
            <Menu>
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
            </Menu>
         </HeaderContainer>
      </HeaderSpace>

   );
}