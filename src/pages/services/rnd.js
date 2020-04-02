import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/services/style1.css'

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
    <div className="pub_1">
      <div className="pub_1Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_pub_1">
      <h2 id="invited">R&D Service</h2>
      <div className="CardGroup_pub_1">
        <div  data-aos="fade-right" className="pub_class">
            <p><span >RnD is a research, development and development activity that has commercial interests in relation to pure scientific research, and applicative development in technology.</span></p>
            <p><span >In the business context, "research and development" usually refers to future-oriented activities, and for the long term, both in science and in technology. The methods used in R &amp; D activities typically use standardized scientific research techniques without expecting definite results (pure form of scientific research) or for obtaining predictable results of commercial value in the near future.</span></p>
            <p><span >Currently Printg is oriented to research and development in the fields of nanotechnology and graphene.</span></p>
            <p id="nanotechnology-for-life-science"><span><strong>Nanotechnology for life Science</strong> </span><br/><span >1.Nanotechnology for Agriculture </span><br/><span >&nbsp; &nbsp; 1.1.Pest control: NPV Nanoformulation and PGPR</span><br/><span >&nbsp; &nbsp; 1.2.Nanofertilizer</span><br/><span >2.Nanotechnology for Biomedical Application</span><br/><span >3.Nano Dental Biomaterials </span><br/><span >4.Nanotechnology for Pharmacy Materials and Nanocosmetics</span><br/><span >5.Nanotechnology for Food and Non Food (Feed) </span></p>
            <p id="nanotechnology-for-energy"><span><strong><span >Nanotechnology for Energy</span></strong></span><br/><span >1.Luminescence Material </span><br/><span >2.Coal-Bed Methane </span><br/><span >3.Metal-air Battery and Fuel Cell </span></p>
            <p id="nano-materials-processing"><span><strong><span >Nano Materials Processing, and Paints and Coating Applications</span></strong></span><br/><span >1.Synthesis of Graphene and Carbon Nano Fiber</span><br/><span >2.Synthesis and Dispersion Nanomaterials </span><br/><span >3.Dispersion of Nanomaterials and Surface Modification </span><br/><span >4.Nanotechnology for Paints and Coating Applications</span></p>
            <p id="computational-nano-materials"><span><strong><span >Computational Nanomaterials</span></strong></span><br/><span >1.Theoretical Studies and Molecular Dynamic Simulation of Nanomaterials </span><br/><span >&nbsp; &nbsp; 1.1. Theoretical Study of Molecular dynamic at Nano Scale </span><br/><span >&nbsp; &nbsp; 1.2. Modeling of Behavior and Material Processing at Nano Scale </span><br/><span >2.Theoretical Studies and Simulation Surface Active Nano Colloids and Ionic Liquid </span></p>
            <p id="instrumentations-and-imaging"><span><strong>Instrumentations and Imaging Technologies at Nano Scale</strong> </span><br/><span >1.Nano Measurement: Particles Size Analyzer and Zeta Potential Measurement System</span><br/><span >2.Quantum Efficiency Measurement Using Integrating Sphere</span><br/><span >3.Nano Imaging and Spectroscopy : STM/AFM and Vacuum Technology</span></p>
            <p id=""><span><a href="http://print-g.ac.id/productservices/inquiryform/testing" target="_blank">More information and services</a></span></p>   
        </div>   
      </div>
    </div>
  </div>
  </Layout>
)

export default IndexPage
