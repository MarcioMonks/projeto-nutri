import styled from "styled-components";

export const HeaderSpace = styled.header`
   display: flex;
   justify-content: center;
`;

export const HeaderContainer = styled.div`
   width: 990px;
   display: flex;
   justify-content: space-between;
`;

export const Logo = styled.div`
   display: flex;
   align-items: center;
`;

export const LogoText = styled.h1`
   font-size: 2.5em;
   font-weight: 100;
   font-family: 'Parisienne', cursive; 
   font-style: italic;
`;

export const Menu = styled.nav`
   display: flex;
   align-items: center;
   ul,
   li {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   ul {
      display: flex;
   }

   .nav-link {
      margin: 5px;
      display: inline-block;
      padding: 15px;
      text-decoration: none;
      border-radius: 10px;
      color: rgba(44, 46, 47, 0.835);
      font-weight: bold; 
      font-size: 1rem;
   }

   .nav-link-active {
      background: #ffbea5;
   }

   .nav-link:hover {
      padding-bottom: 10px;
      border-bottom: 1px solid #ffbea5; 
   }
`;


