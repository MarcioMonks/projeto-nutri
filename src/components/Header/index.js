import React from 'react';
import { Link } from 'react-router-dom';
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
            </Menu>
         </HeaderContainer>
      </HeaderSpace>

   );
}