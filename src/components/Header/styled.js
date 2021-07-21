import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const HeaderSpace = styled.header`
   display: flex;
   justify-content: center;
   height: 300px;
   background-color: #FFFAFA;
`;

export const HeaderContainer = styled.div`
   width: 1000px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Logo = styled.div`
   display: flex;
   align-items: center;
   padding: 35px;
`;

export const LogoText = styled.h1`
   font-size: 4em;
   font-weight: 100;
   font-family: 'Parisienne', cursive; 
   font-style: italic;
   margin-bottom: 35px;
`;


export const TitleLink = styled(Link)`
   display: flex;
   align-items: center;
   text-decoration: none;
   cursor: pointer;
   color: rgba(44, 46, 47, 0.835);
   font-weight: bold; 
`;


export const Nav = styled.nav`
   display: flex;
   align-items: center;
`;

export const NavLink = styled(Link)`
   list-style: none;
   text-decoration: none;
   margin: 0 15px;
   border: 2px solid #FFFAFA;
   padding: 5px 10px;
   border-radius: 10px;
   color: rgba(44, 46, 47, 0.835);
   font-weight: bold; 
   font-size: 1rem;

   &.active {
      background: #ffbea5;
   }

   &:hover {
      transition: all ease .4s;
      background: #ffbea5;
      color: #fff;
   }
`;





