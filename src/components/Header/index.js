import React from 'react';

import {
   HeaderSpace,
   HeaderContainer,
   Logo,
   LogoText,
   TitleLink,
   Nav,
   NavLink
} from './styled';

const Header = () => {
   return (
      <>
         <HeaderSpace>
            <HeaderContainer>
               <Nav>
                  <Logo>
                     <TitleLink
                        exact
                        to="/"><LogoText>Clínica de Nutrição</LogoText>
                     </TitleLink>
                  </Logo>
               </Nav>
               <Nav>
                  <NavLink to="/sobre" activeStyle>Sobre</NavLink>
                  <NavLink to="/agendar" activeStyle>Agendar Consulta</NavLink>
                  <NavLink to="/servicos" activeStyle>Serviços</NavLink>
                  <NavLink to="/nutri/login" activeStyle>@Nutri </NavLink>  
               </Nav>
            </HeaderContainer>
         </HeaderSpace>
      </>
   );
}

export default Header
