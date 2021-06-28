import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';



const Container = () => {
   return (
      <>
         
         <StyledContainer>
            <Logo/>
            <Menu/>
         </StyledContainer>
        
      </>
   )
}

const StyledContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 990px;
`

export default Container;