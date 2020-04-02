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
import '../components/css_pages/services.css'

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
    <div className="Services">
      <div className="ServicesGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_services">
      <h2>Services</h2>
      <div className="CardGroup_services">
        <div className="services">
          <h3 className="underline" >RnD Services</h3>          
          <Link to="/services/rnd#nanotechnology-for-life-science"><h4>Nanotechnology for Life Science</h4></Link>
          <Link to="/services/rnd#nanotechnology-for-energy"><h4>Nanotechnology for Energy</h4></Link>
          <Link to="/services/rnd#nano-materials-processing"><h4>Nano Materials Processing, and Paints and Coating Applications</h4></Link>
          <Link to="/services/rnd#computational-nano-materials"><h4>Computational Nano Materials</h4></Link>
          <Link to="/services/rnd#instrumentations-and-imaging"><h4>Instrumentations and Imaging Technologies at Nano Scale</h4></Link>
        </div>

        <div className="analysis">
          <h3 className="underline" >Analysis</h3>          
          <Link to="/services/analysis#Perkin-Elmer-LS55"><h4>Photoluminescence</h4></Link>
          <Link to="/services/analysis#rigaku"><h4>X-Ray Fluorescence (XRF)</h4></Link>
          <Link to="/services/analysis#alatukurbatere"><h4>Baterry Analysis</h4></Link>
          <Link to="/services/analysis#Horiba_SZ-100"><h4>Particle size analysis n Zeta potential </h4></Link>
          <Link to="/services/analysis#FTIR"><h4>Fourier-transform infrared spectroscopy (FTIR)</h4></Link>
        </div>

        <div className="journal">
          <h3 className="underline" >Journal Service</h3>          
          <Link to="/services/journal-service"><h4>Journal of Powder Technology and Advanced Functional Materials (JPTAFM) </h4></Link>
        </div>
      
      
      </div>
    </div>
    {/* <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene services Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a services Centre at Directorate of services and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology services & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural resources and clean water for a growing population."
    /> */}
    
    
  </div>
  </Layout>
)

export default IndexPage
