import React from "react"
import "../styles/custom.css"
// import {Link} from "gatsby"
import styled, {ThemeProvider} from "styled-components"
import Header from "../components/header/header"
import Container from"../components/container/container"
import Logo from "../components/logo/logo"
import Navbar from "../components/navbar/navbar"
import colors from "../components/colors"
import Card from "../components/cards/cards"

const CardContainer = styled.div`
display:flex;
margin-top:30px;
width:100%;
justify-content:center;
`;

export default () => (
    <ThemeProvider theme={colors}>
        <Container>
            <Logo/>
            <Header headerText="Think. Create. Repeat."/>
            <Navbar />
            <CardContainer>
                <Card cardType="I.T." cardBody="Lorem ipsum" cardTitle="Projet 1"/>
                <Card cardType="Cooking" cardBody="Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi." cardTitle="Projet 2"/>
            </CardContainer>
        </Container>
    </ThemeProvider>
    ) 
