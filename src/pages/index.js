import React from "react"
import "../styles/custom.css"
// import {Link} from "gatsby"
import {ThemeProvider} from "styled-components"
import Header from "../components/header/header"
import Container from"../components/container/container"
import Logo from "../components/logo/logo"
import Navbar from "../components/navbar/navbar"
import colors from "../components/colors"



export default () => (
    <ThemeProvider theme={colors}>
        <Container>
            <Logo/>
            <Header headerText="Think. Create. Repeat."/>
            <Navbar />
        </Container>
    </ThemeProvider>
    ) 
