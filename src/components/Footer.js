import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    @media screen and (max-width: 640px) {
        max-width: 250px;
        margin: 20px 20px 20px 50px;
        padding: 20px;
    }
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }
    @media screen and (max-width: 640px) {
        max-width: 250px;
        margin: 20px 20px 20px 50px;
        padding: 20px;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`
const Items = styled.a`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 640px) {
        font-size: 15px;
        text-align: center;
    }
`
const Flag = styled.img`
    position: relative;
    margin: auto;
`

const Footer = ({data, children}) => (
    <FooterGroup>
      {/* <Text>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Text>
      <Button>Tweet</Button> */}
      <Flag src="https://s11.flagcounter.com/count2/bOjI/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"/>
      {/* <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup> */}
      <LinkGroup>
        <Items href="/about"> About </Items> 
        <Items href="/careers"> Careers </Items>
        <Items href="/products"> Products </Items>
        <Items href="/services"> Services </Items>
        <Items href="/contact-us"> Contact Us </Items>
        <Items href="/faq"> FAQ </Items>
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer