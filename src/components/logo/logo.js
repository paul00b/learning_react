import React from "react"
import logo from "../../images/bro_white.svg"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledImg = styled.img`
    display:block;
    margin: ${props => props.logoMargin || "4em auto"};
`;

export default () => (
        <Link to="/">
            <StyledImg src={logo} alt="logo"/>
        </Link>
)