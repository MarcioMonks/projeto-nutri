import React from 'react';
import styled from 'styled-components';

const Sobre = () => {
   return (
      <>
      <StyledDiv>
            <h1>Sobre nós</h1>
            <p>
               Nossa clínica nasceu para Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor dignissim hendrerit. Ut nec ligula ullamcorper, maximus diam ac, elementum purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non eleifend magna. Suspendisse id tincidunt nunc. Nam efficitur aliquet odio, at volutpat quam. Ut scelerisque, tellus a sollicitudin tristique, neque nunc finibus turpis, at hendrerit orci augue a massa.

               Mauris ac tellus leo. Sed sed dolor ante. Pellentesque sed scelerisque libero, et commodo justo. Fusce id urna auctor, pellentesque ligula id, vestibulum metus. In vulputate scelerisque odio in mollis. Sed mauris lacus, imperdiet auctor justo eu, imperdiet consequat tortor. Nam id quam id ex varius volutpat sed nec dolor. Cras porttitor eros ac tristique interdum. Quisque consequat odio nec enim sagittis, id auctor lectus lobortis. Etiam egestas commodo ultricies. Pellentesque interdum sapien nunc, ac auctor orci iaculis quis. Maecenas vel rutrum elit. 
            </p>         
      </StyledDiv>
      </>
   )
}

const StyledDiv = styled.div`
   display: block;
   width: 990px;
   margin: auto;
   position: relative;
`

export default Sobre;