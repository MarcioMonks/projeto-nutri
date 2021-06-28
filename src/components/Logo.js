import React from 'react';
import styled from 'styled-components';

const Logo = () => {
   return (
      <>
         <StyledLogo>
            <StyledTitle>Clínica Coma Saúde</StyledTitle>
         </StyledLogo>
      </>
   )
}

const StyledLogo = styled.div`
   display: flex;
   align-items: center;
`

const StyledTitle = styled.h1`
   font-size: 2.5em;
   font-weight: 100;
   font-family: 'Parisienne', cursive; 
   font-style: italic;
`

export default Logo;