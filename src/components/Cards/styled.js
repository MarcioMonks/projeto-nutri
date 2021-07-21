import styled from "styled-components";

export const CardContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: flex-start;
`;

export const Card = styled.div`

   border: 3px solid;
   border-radius: 10px;
   overflow: hidden;
   margin: 10px;
   display: flex;
   flex-direction: column;
   max-width: 300px;
   min-width: 300px;
   height: 400px;

   img {
      width: 100%;
      height: 100%;
   }
`;

export const CardTitle = styled.div`
   padding: 5px 0;
   display: flex;
   justify-content: center;
`;

export const CardContent = styled.div`
   background-image: url("https://www.enzazaden.com//us/-/media/Images/enza-zaden/list-images-640x480/01_products-services/02-trends-and-inspiration/2020/li_2020_healthy-food-heart.jpg");
   background-position: center;
   background-size: cover;
   flex: 1;
   background-color: #FFF;
   color: #000;
   padding: 10px;
`;