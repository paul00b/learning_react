import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/custom.css"
import styled from "styled-components"
import Container from"../components/container/container"
import Logo from "../components/logo/nav_logo"
import File_img from "../images/document.js"
import CardProject from "../components/card_project/card_project"
import SecondaryHeader from "../components/secondaryHeader/secondaryHeader"
const ContainerHeader = styled.div`
    display:flex;
    flex-wrap: no-wrap;
`;

const StyledImg = styled.img`
  border-radius: 5px;
  width:280px;
  margin: auto;
`;

const ImgContainer = styled.div`
display:flex;
flex-wrap: nowrap;
justify-content:center;
`; 
const StyledIframe = styled.iframe`
  border:none;
  margin:auto;
  display:block;
`; 
const StyledIcon = styled(File_img)`
`; 

const LinkDiv = styled.div`
  display:flex;
  flex-wrap:nowrap;
  justify-content:center;
  text-align:left;
  position:relative;
  width:33%;
  a{
    text-decoration:none;
  }
  span{
    color:white;
    text-decoration:none;
    position:absolute;
    bottom:0px;
    right:50%;
  }
`; 

const Row = styled.div`
display:flex;
flex-wrap:no-wrap;
`;

function Video_section(props) {
  const video_link = props.video_link;
  if (video_link) {
    return <CardProject>
      <h1>Video</h1>
      <StyledIframe src={video_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
    </CardProject>;
  }
  return null;
}

function Doc_link(props) {
  const file = props.file;
  const desc = props.desc;
  if (file) {
    return <LinkDiv>
              <Link to={file}>
                <StyledIcon src={File_img} fill="white" height="100px" width="100px" />
              </Link>
              <span>{desc}</span>
            </LinkDiv>
  }
  return null;
}

export default ({ data }) => {
    const project = data.markdownRemark
    return (
      <Container>
          <ContainerHeader>
              <Logo/>
            <SecondaryHeader headerText = {project.frontmatter.title + " - " + project.frontmatter.category} />
          </ContainerHeader>
          <CardProject>
            <div>
            <h1>L'histoire </h1>
            <p>
              {project.frontmatter.story}
            </p>
            {/* <div dangerouslySetInnerHTML={{ __html: project.html }} /> */}
            </div>
          </CardProject>
          <CardProject>
          <h1>Screenshots </h1>
            <ImgContainer>
              <StyledImg src = {project.frontmatter.image_1}></StyledImg>
              <StyledImg src = {project.frontmatter.image_2}></StyledImg>
              <StyledImg src = {project.frontmatter.image_3}></StyledImg>
            </ImgContainer>
          </CardProject>
          <Video_section video_link={project.frontmatter.video_link} />
          
          <CardProject>
            <h1>Fichiers</h1>
            <Row>
              <Doc_link file={project.frontmatter.file_1} desc={project.frontmatter.file_1_desc} />
              <Doc_link file={project.frontmatter.file_2} desc={project.frontmatter.file_2_desc}/>
              <Doc_link file={project.frontmatter.file_3} desc={project.frontmatter.file_3_desc}/>
            </Row>
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
            title
            date
            category
            body
            story
            image_1
            image_2
            image_3
            file_1
            file_2
            file_3
            file_1_desc
            file_2_desc
            file_3_desc
            video_link
        }
      }
    }
  `