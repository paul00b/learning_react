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
`;

export default () => (
   <StyledContainer>
       <Link className={NavStyle.link} to="/">All</Link>    
       <Link className={NavStyle.link} to="/">IT</Link>    
       <Link className={NavStyle.link} to="/">Cooking</Link>    
       <Link className={NavStyle.link} to="/">Video Games</Link>    
       <Link className={NavStyle.link} to="/">V.R.</Link>    
       <Link className={NavStyle.link} to="/">Others</Link>    
   </StyledContainer>
);