import React from "react";
import {Link} from "gatsby"
import NavStyle from  "./navbar.module.css"
import styled, {ThemeProvider} from "styled-components"
import colorsGlobal from "../../components/colors"

const StyledContainer = styled.div`
    background-image: ${colorsGlobal.gradientBlueGreen_nav};
    margin: 0 auto;
    display:block;
    text-align:center;
    border-radius: 30px;
    margin-top:5%;
    width:79%;
    &:hover a:not(:hover){
      opacity:0.5;
    }
`;

const StyledLink = styled(Link)`
    text-decoration:none!important;
    font-size:18px;
    text-shadow: none;
    color:white;
    background-image:none;
    padding:0px 20px;
    font-weight:200;
    height:100%;
    transition: all 400ms;
    &:hover, &:focus{
        font-weight: 500;
        transition: all 400ms;
        font-size:103%;
        opacity:1!important;
    }
   
`
export default () => (
   <StyledContainer>
       <StyledLink to="/">All</StyledLink>    
       <StyledLink to="/">IT</StyledLink>    
       <StyledLink to="/">Cooking</StyledLink>    
       <StyledLink to="/">Video Games</StyledLink>    
       <StyledLink to="/">V.R.</StyledLink>    
       <StyledLink to="/">Others</StyledLink>    
   </StyledContainer>
);