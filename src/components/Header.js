import React from 'react';
import styled from 'styled-components';

import Container from './Container';


const Header = () => {
   return (
      <>
      
      <StyledHeader>
         <Container/>      
      </StyledHeader>
      
         
      </>
   )
}

const StyledHeader = styled.header`
   display: flex;
   justify-content: center;
   height: 120px;
`

export default Header;