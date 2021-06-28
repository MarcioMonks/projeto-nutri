import React from 'react';
import styled from 'styled-components';

const Footer = () => {
   return (
     <StyledFooter>
        Márcio Monks - Copyright 2021
     </StyledFooter>
   )
}

const StyledFooter = styled.footer`
   height: 100px;
   margin-top: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(44, 46, 47);
   color: #FFF;
`

export default Footer;

