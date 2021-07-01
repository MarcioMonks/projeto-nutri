import React from 'react';
import styled from 'styled-components';

const Footer = () => {
   return (
     <StyledFooter>
        
            <p>Márcio Monks - Copyright 2021</p>
        
     </StyledFooter>
   )
}

const StyledFooter = styled.footer`
   width: 100%;
   height: 100px;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: rgba(44, 46, 47);
   color: #FFF;
   display: flex;
   justify-content: center;
   align-items: center;

`

export default Footer;

