import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const HeaderSpace = styled.header`
   display: flex;
   justify-content: center;
`;

export const HeaderContainer = styled.div`
   width: 1000px;
   display: flex;
   justify-content: space-between;
`;

export const Logo = styled.div`
   display: flex;
   align-items: center;
`;

export const LogoText = styled.h1`
   font-size: 3em;
   font-weight: 100;
   font-family: 'Parisienne', cursive; 
   font-style: italic;
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
      margin: 5px;
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
         transition: 0.5s;
      background: #ffbea5;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(44, 46, 47, 0.835);
      }
`;





