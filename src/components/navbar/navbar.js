import React from "react";
import {Link} from "gatsby"
import styled from "styled-components"
import colorsGlobal from "../../components/colors"

const StyledContainer = styled.div`
    background-image: ${colorsGlobal.gradientBlueGreen_nav};
    margin: 0 auto;
    display:block;
    text-align:center;
    border-radius: 30px;
    margin-top:5%;
    width:79%;
    padding:5px;
    &:hover a:not(:hover){
      opacity:0.4;
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
        opacity:1!important;
    }
   
`
export default () => (
   <StyledContainer>
       <StyledLink >All</StyledLink>    
       <StyledLink >IT</StyledLink>    
       <StyledLink >Cooking</StyledLink>    
       <StyledLink >Video Games</StyledLink>    
       <StyledLink >V.R.</StyledLink>    
       <StyledLink >Others</StyledLink>    
   </StyledContainer>
);