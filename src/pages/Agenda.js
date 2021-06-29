import React from 'react';
import styled from 'styled-components';


const Agenda = () => {
   return (
      <StyledDiv>
      
      <h1>Agende sua consulta aqui</h1>
  
      </StyledDiv>
   )
}

const StyledDiv = styled.div`
   display: block;
   width: 990px;
   margin: auto;
   position: relative;

   p {
      text-align: justify;
   }
`

export default Agenda;