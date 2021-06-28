import React from 'react';
import styled from 'styled-components';

import ContentContainer from './ContentContainer';


const Banner = () => {
   return (
      <StyledBanner>
         <ContentContainer/>
      </StyledBanner>
   )
}

const StyledBanner = styled.section`
   display: flex;
   justify-content: center;
   background-image: url('https://nutricamillabaffa.com.br/resources/img/nutricionista-camilla-baffa.jpg');
   background-position: center;
   background-size: cover;
   height: 670px;
`

export default Banner;