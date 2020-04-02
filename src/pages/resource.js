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
import '../components/css_pages/resource.css'

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
    <div className="Resource">
      <div className="ResourceGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Resource Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_resource">
      <h2>Resource</h2>
      <div className="CardGroup_resource">
        <div className="researchers">
          <h3 className="underline" >Researchers</h3>          
          <Link to="/resource/hrd#researchers"><h4>Our Team</h4></Link>
        </div>

        <div className="students">
          <h3 className="underline" >Students</h3>          
          <Link to="/resource/hrd#students-s1"><h4>Bachelor</h4></Link>
          <Link to="/resource/hrd#students-s2"><h4>Master</h4></Link>
          <Link to="/resource/hrd#students-s3"><h4>Doctoral</h4></Link>
        </div>

        <div className="facilities">
          <h3 className="underline" >Facilities</h3>          
          <Link to="/resource/hrd#spectro"><h4>Measurement and Processing Facilities</h4></Link>
          <Link to="/resource/hrd#proc-facilities"><h4>Processing Facilities</h4></Link>
          <Link to="/resource/hrd#support"><h4>Suporting facilities at UNPAD Central Laboratory</h4></Link>
        </div>

        <div className="partners">
          <h3 className="underline" >Partners</h3>          
          <Link to="/resource/hrd#internal-collabs"><h4>Internal Collaborators</h4></Link>
          <Link to="/resource/hrd#univ-assoc"><h4>Universities and Associations</h4></Link>
          <Link to="/resource/hrd#industries"><h4>Industries</h4></Link>
        </div>
      
      
      </div>
    </div>
    {/* <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene Resource Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a Resource Centre at Directorate of Resource and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology Resource & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural resources and clean water for a growing population."
    /> */}
    
    
  </div>
  </Layout>
)

export default IndexPage
