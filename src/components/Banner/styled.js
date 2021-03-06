import styled from "styled-components";

export const StyledBanner = styled.section`
   display: flex;
   justify-content: center;
   background-image: url('https://nutricamillabaffa.com.br/resources/img/nutricionista-camilla-baffa.jpg');
   /* background-image: url('https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'); */
   background-position: bottom;
   background-size: cover;
   height: 650px;
`;

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1000px;
   flex-direction: column;

   .banner_headline {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   .banner_headline h1 {
      color: rgba(44, 46, 47);
      
      text-transform: uppercase;
      font-size: 65px;
      margin: 0;
      padding: 0;
      max-width: 350px;
   }

   .banner_headline h2 {
      color: rgba(44, 46, 47);
      
      font-size: 21px;
      margin: 0;
      padding: 0;
      max-width: 350px;
      margin-top: 30px;
   }

   .banner_options {
      height: 210px;
      display: flex;
      justify-content: center;
      
   }

   .banner1,
   .banner2,
   .banner3 {
      flex: 1;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 20px;
      text-align: justify;
      color: white;
   }

   .banner1 {
      background-color: #FFBEA5;
   }

   .banner2 {
      background-color: #E5AB94;
   }

   .banner3 {
      background-color: #CC9884;
   }

   .banner_title {
      font-size: 21px;
   }

   .banner_desc {
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 20px;
   }

`;