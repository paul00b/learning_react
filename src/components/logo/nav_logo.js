import React from "react"
import logo from "../../images/bro_white.svg"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledImg = styled.img`
    display:block;
    width:60px;
    position:absolute;
    left:30px;
    top:20px;
`;

export default () => (
        <Link to="/">
            <StyledImg src={logo} alt="logo"/>
        </Link>
)