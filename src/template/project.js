import React from "react"
import { graphql } from "gatsby"
import "../styles/custom.css"
import styled, {ThemeProvider} from "styled-components"
import Container from"../components/container/container"
import Logo from "../components/logo/logo"
import CardProject from "../components/card_project/card_project"
import colors from "../components/colors"

const ContainerHeader = styled.div`
    display:flex;
    flex-wrap: no-wrap;
`
const StyledLogo = styled(Logo)`
   margin-top:4rem;
    position:absolute;
`;

const SecondaryHeader = styled.h1`
    display:inline-block;
    width:100%;
    margin:10.5rem auto 0rem auto;
    bottom:0;
`
export default ({ data }) => {
    const project = data.markdownRemark
    return (
      <Container>
          <ContainerHeader>
            <StyledLogo/>
            <SecondaryHeader>
            {project.frontmatter.title} 
            </SecondaryHeader>
          </ContainerHeader>
          <CardProject>
            <div>
            <h1>- {project.frontmatter.date}</h1>
            <h3>{project.frontmatter.category}</h3>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
          </CardProject>
      </Container>
    )
  }
  export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            date
            category
            body
            short_desc
        }
      }
    }
  `