import React from 'react';

import { Card, CardTitle, CardContent } from './styled';

const Cards = (props) => {

   const cardStyle = {
      backgroundColor: props.color || "#F00",
      borderColor: props.color || "#F00"
   }
   return (
      
      <Card style={cardStyle}>
         <CardTitle>{props.titulo}</CardTitle>
         <CardContent>
            { props.children }
         </CardContent>
      </Card>
    
      
   );
};

export default Cards;