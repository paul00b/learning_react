import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import colorsGlobal from "../../components/colors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const LinkStyled = styled(Link)`
    background-image: ${colorsGlobal.gradientBlueGreen_btn};
    padding:5px;
    border-radius:30px;
    display:block;
    text-align:center;
    max-width: 65%;
    margin:0 auto;
    color:white;
    position:relative;
    transition: all 600ms;
    text-decoration:none;
    &:hover{
        background-image: ${colorsGlobal.gradientGreenBlue_btn};
        transition: all 0.6ms;
    }
`;

const IconStyled = styled(FontAwesomeIcon)`
position:absolute;
right:10px;
bottom:7px;
`
export default (props) => (
    <LinkStyled>
        {props.linkName} <IconStyled icon={faChevronRight} />
    </LinkStyled>
);