import React from "react";
import {Link} from "gatsby"
import NavStyle from  "./navbar.module.css"
import styled, {ThemeProvider} from "styled-components"
import colorsGlobal from "../../components/colors"

const StyledContainer = styled.div`
    background-image: ${colorsGlobal.gradientBlueGreen};
    margin: 0 auto;
    display:block;
    text-align:center;
    border-radius: 30px;
    margin-top:5%;
`;

export default () => (

   <StyledContainer>
       <Link className={NavStyle.link} to="/">Lorem</Link>    
       <Link className={NavStyle.link} to="/">Lorem</Link>    
       <Link className={NavStyle.link} to="/">Lorem</Link>    
   </StyledContainer>
)