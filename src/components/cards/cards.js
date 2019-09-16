import React from "react"
import styled from "styled-components"
import colorsGlobal from "../../components/colors"
import Cta from "../buttons/cta"
const CardContainer = styled.div`
    background-image: ${colorsGlobal.gradientDarkDarker};
    width:250px;
    height:250px;
    min-width:250px;
    min-height:250px;

    position:relative;
    border-radius: 20px;
    margin:20px;
    color:white;
    box-shadow: 1px 2px 2px 0px rgba(37,38,43,1);
    overflow: hidden;

    ::after{
       content: "";
       display: block;
       padding-top: 30%;
    }
    
`;
const CardHeader = styled.div`
    width: 100%;
    text-align: center;
    line-height:45px;
    display:flex;
`;
const CardType = styled.div`
    width: 50%;
    text-align: center;
    font-size: 19px;
    height:45px;
    background-color: ${colorsGlobal.teal};
    border-radius:20px 0px 20px 0px;
    color:white;
    font-weight: 200;
`;
const CardTitle = styled.div`
    width: 50%;
    text-align: left;
    padding-left:10px;
    font-size:26px;
    font-weight:600;
`;
const CardBody = styled.div`
    text-align: center;
    font-size:15px;
    font-weight:300;
    padding:10% 10px 0px 10px;
    overflow:hidden;
    height:57%;
`;

export default (props) => (
    <CardContainer>
        <CardHeader>
            <CardType>{props.cardType}</CardType>
            <CardTitle>{props.cardTitle}</CardTitle>
        </CardHeader>
        <CardBody>
            <p>
            {props.cardBody}
            </p>
        </CardBody>
        <Cta linkName = "Voir plus"/>
    </CardContainer>
);


