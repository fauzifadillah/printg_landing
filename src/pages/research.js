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
import '../components/css_pages/research.css'

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
    <div className="Research">
      <div className="ResearchGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research">
      <h2>Research</h2>
      <div className="CardGroup_research">
        <div className="research">
          <h3 className="underline" >Research and Program</h3>          
          <Link to="/research/nano-materials-processing-and-coating-applications"><h4>Nano Materials Processing and Coating Applications</h4></Link>
          <Link to="/research/nanotechnology-for-energy"><h4>Nanotechnology for Energy</h4></Link>
          <Link to="/research/nanotechnology-for-life-science"><h4>Nanotechnology for Life Science</h4></Link>
          <Link to="/research/computational-nano-materials"><h4>Computational Nano Materials</h4></Link>
          <Link to="/research/instumentations-and-imaging-technologies-at-nano-scale"><h4>Instrumentations and Imaging Technologies at Nano Scale</h4></Link>
        </div>

        <div className="publications">
          <h3 className="underline" >Publications</h3>          
          <Link to="/publications/publications#invited"><h4>Invited/Keynotes Speakers</h4></Link>
          <Link to="/publications/publications#international-journal"><h4>International Journal/ Conference Proceeding</h4></Link>
          <Link to="/publications/publications#seminar-inter-regional"><h4>Seminar International/Regional</h4></Link>
          <Link to="/publications/publications#national-journal"><h4>National Journal</h4></Link>
          <Link to="/publications/publications#national-seminar"><h4>National Seminar</h4></Link>
        </div>

        <div className="downloads">
          <h3 className="underline" >Downloads</h3>          
          <a href="https://drive.google.com/open?id=0B135n8OYJCzMbTRnOWh5b0paUG8" ><h4>Brochure Nanotech</h4></a>
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
