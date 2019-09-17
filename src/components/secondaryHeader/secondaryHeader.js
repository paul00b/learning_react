import React from "react"
import "../../styles/custom.css"
import styled, {ThemeProvider} from "styled-components"
import colorsGlobal from "../colors"

const SecondaryHeader = styled.h1`
    display:inline-block;
    width:100%;
    margin:10.5rem auto 0rem auto;
    padding-bottom:30px;
    position:relative;
    text-align:center;
    width:50%;
    &::after{
      content: "";
    position: absolute;
    top: 42px;
    left: 0px;
    margin-left: auto !important;
    margin-right: auto !important;
    transition: 0.3s;
    height:5px;
    background-image:${colorsGlobal.gradientBlueGreen_btn};
    width:50%;
    border-radius:30px;
    transform:translateX(50%);
    
    }
`

export default (props) => (
    
    <SecondaryHeader>
        {props.headerText}
    </SecondaryHeader>
    
)
  
 