import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    ${'' /* height: 720px;  */}
    background-size: cover;
    display: grid;
    grid-template-rows: 200px auto;
    grid-gap: 10px; 
    position: relative;  

    @media (max-width: 640px) {
        ${'' /* height: 820px; */}
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 165px;
    margin: 0 auto;
    ${'' /* border: 0.75px solid darkcyan; */}
    padding: 10px;
    ${'' /* border-radius: 30px;
    -webkit-box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    background: whitesmoke; */}
    ${'' /* background: linear-gradient(120deg, whitesmoke 20%, greenyellow 100%); */}
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 50px;
    margin: auto;
    line-height: 1.2;
    text-align: center;
    @media (max-width: 720px) {
        font-size: 30px;
    }
`

const SectionText = styled.p`
    margin: auto;
    opacity: 90%;
    padding: 20px;
    border-radius: 30px;
    -webkit-box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    box-shadow: 9px 14px 29px -23px rgba(0,0,0,0.75);
    background: darkorange;
    color: whitesmoke;
    ${'' /* letter-spacing: 2px; */}
    text-align: justify;
    hyphens: auto;
    position: relative;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 14px;
        padding: 20px;
        border-radius: 10px;
        
        text-justify: inter-word;
        
    }
`

const NoWaveSection = props => (
    <SectionGroup image={props.image}>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default NoWaveSection