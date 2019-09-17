import React from "react"
import styled from "styled-components"
import colorsGlobal from "../../components/colors"
import Cta from "../buttons/cta"
const CardContainer = styled.div`
    background-image: ${colorsGlobal.gradientDarkDarker};

    position:relative;
    border-radius: 20px;
    margin:20px;
    color:white;
    box-shadow: 1px 2px 2px 0px rgba(37,38,43,1);
    overflow: hidden;
    padding:20px;

   
`

export default ({children}) => (
    <CardContainer>
        {children}
    </CardContainer>
);


