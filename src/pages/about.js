import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

import Header from '../components/header'
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from "styled-components"
import NoWaveSection from "../components/NoWaveSection"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <img src={require('../images/printg.png')} alt="" width="200"/>
        <h1>Nanotechnology and Graphene Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} alt="" width="50"/>
          <img src={require('../images/logo-figma.png')} alt="" width="50"/>
          <img src={require('../images/logo-studio.png')} alt="" width="50"/>
          <img src={require('../images/logo-framer.png')} alt="" width="50"/>
          <img src={require('../images/logo-react.png')} alt="" width="50"/>
          <img src={require('../images/logo-swift.png')} alt="" width="50"/>
        </div>
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards">
      <h2>Vision and Mission</h2>
      <div className="CardGroup">
      <h3>A global Centre of Excellence for nanotechnology & graphene focus on applications and transforming into a tool to solve real-world problems with interdisciplinary approaches</h3>
      <h3>To conduct and support research, development, design and engineering in nanotechnology & grahene and transfer the technology to industrial sector in order to increase Indonesia’s competitiveness and improve the quality of life and the environment with interdisciplinary approaches</h3>
      </div>
    </div>
    <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene Research Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a Research Centre at Directorate of Research and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology Research & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural resources and clean water for a growing population."
    />
    
    <SectionCaption>12 Sections - 6 Hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet "
    />
    <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet 
      Lorem ipsum dolor sit amet "
    />
  </div>
  </Layout>
)

export default IndexPage
