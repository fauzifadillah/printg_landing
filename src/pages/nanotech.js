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
import '../components/css_pages/nanotech.css'

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
    <div className="Nanotech">
      <div className="NanotechGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_nanotech">
      <h2>Nanotechnology</h2>
      <div className="CardGroup_nanotech">
        <div className="bubble">
          <h3 className="underline" >Bubble</h3>          
          <p>
            Fine bubbles are bubbles smaller than one millimetre in diameter. They have widespread application in industry, life science, and medicine. The composition of the bubble shell and filling material determine important design features such as buoyancy, crush strength, thermal conductivity, and acoustic properties.
            They are used in medical diagnostics as a contrast agent for ultrasound imaging. The gas-filled, e.g. air or perfluorocarbon, microbubbles oscillate and vibrate when a sonic energy field is applied and may reflect ultrasound waves. This distinguishes the microbubbles from surrounding tissues. In practice, because gas bubbles in liquid lack stability and would therefore quickly dissolve, microbubbles must be encapsulated with a solid shell. The shell is made from either a lipid or a protein such as Optison microbubbles which consist of perfluoropropane gas encapsulated by a serum albumin shell.
            Fine bubbles may be used for drug delivery, biofilm removal, membrane cleaning/biofilm control and water/waste water treatment purposes. They are also produced by the movement of a ship’s hull through water, creating a bubble layer; this may interfere with the use of sonar because of the tendency of the layer to absorb or reflect sound waves.
          </p>
        </div>

        <div className="paint">
          <h3 className="underline" >Paint</h3>          
          <p>
          Paint is any liquid, liquefiable, or mastic composition that, after application to a substrate in a thin layer, converts to a solid film. It is most commonly used to protect, color, or provide texture to objects. Paint can be made or purchased in many colors—and in many different types, such as watercolor, synthetic, etc. Paint is typically stored, sold, and applied as a liquid, but most types dry into a solid.
          </p>
        </div>

        
      
      
      </div>
    </div>
    {/* <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene Research Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a Research Centre at Directorate of Research and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology Research & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural resources and clean water for a growing population."
    /> */}
    
    
  </div>
  </Layout>
)

export default IndexPage
