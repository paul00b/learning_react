import React from "react"
import { graphql } from "gatsby"
import "../styles/custom.css"
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
flex-wrap:wrap;
`;

export default ({ data }) => (
    <ThemeProvider theme={colors}>
        <Container>
            <Logo/>
            <Header headerText="Think.Create.Repeat."/>
            <Navbar />
            <CardContainer>
                {/* <Card cardType={data.allMarkdownRemark.totalCount} cardBody="Lorem ipsum" cardTitle="Projet 1"/> */}
                {/* {data.allMarkdownRemark.edges.map(({ node }) => (
                   <Card key={node.id} cardTitle={node.frontmatter.title} cardBody={node.frontmatter.body} cardType={node.frontmatter.category}/>
                    ))} */}
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Card key={node.id} cardTitle={node.frontmatter.title} cardBody={node.frontmatter.short_desc} cardType={node.frontmatter.category}/>
                        ))}
            </CardContainer>
        </Container>
    </ThemeProvider>
    ) 
    export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  body
                  category
                  short_desc
                }
              }
            }
          }
        }
  `