import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/research/style4.css'

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
    <div className="Research_4">
      <div className="Research_4Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research_4">
      <h2>Computational Nano Materials</h2>
      <div className="CardGroup_research_4">
        <div className="research">
          <h3 className="underline" >Theoretical Studies and Molecular Dynamic Simulation of Nanomaterials</h3>          
          <p>
          Molecular dynamics (MD) is a computer simulation method for studying the physical movements of atoms and molecules, and is thus a type of N-body simulation. The atoms and molecules are allowed to interact for a fixed period of time, giving a view of dynamical evolution of the system. The method was originally developed within the field of theoretical physics. Some of computer simulation at nano scale level is very important to investigate the nanoscience behind the phenomena.  
          </p>
          <h5>Challenges:</h5>
          <p>
          The current challenge in development of MD is based on the phenomena observed either optical phenomena, mechanical, or electrical properties at Nano scale. Thus, the most exciting developments will come from the model development considering mathematical formulation on the nano scale materials.
          </p>
        </div>
        <div id="yudi">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Dr. rer. Nat. Yudi Rosandi<br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
          <a href="mailto:imadejoni@phys.unpad.ac.id">
          E-Mail: imadejoni@phys.unpad.ac.id
          </a>
          </h5>
        </div>

        <div className="research">
          <h3 className="underline" > Theoretical Studies and Simulation Surfacec Active Nano Colloids and Ionic Liquid for Various Applications</h3>          
          <p>
          Properties of materials not only depend on the type of element , but also on the surface properties which plays an important roles in various application such as optical properties, electrochemical, and mechanical properties. Thus, understanding the surface active nano colloids and ionic liquid is very important.
          </p>
          <h6>● Phosphor Application for Energy Saving Lamps</h6>
          
          <figure>
            <img id="figure_14" src={require('../../images/research/figure_14.png')}/>
            <figcaption className="figcaption">Modeling of White LEDs Application</figcaption>
          </figure>
          <figure>
            <img id="modelling-of-white-led-application" src={require('../../images/research/modelling-of-white-led-application.png')}/>
            <figcaption className="figcaption">Modeling of White LEDs Application (2)</figcaption>
          </figure>
        </div>

        <div className="research">
          <h3 className="underline" > Theoretical Studies and Simulation Surfacec Active Nano Colloids and Ionic Liquid for Various Applications</h3>          
          <p>
          Properties of materials not only depend on the type of element , but also on the surface properties which plays an important roles in various application such as optical properties, electrochemical, and mechanical properties. Thus, understanding the surface active nano colloids and ionic liquid is very important.
          </p>
          <h6>● Phosphor Application for Energy Saving Lamps</h6>
          <div className="double_fig">
          <figure>
            <img id="heat-distribution-inside-reactor" src={require('../../images/research/heat-distribution-inside-reactor.png')}/>
            <figcaption className="figcaption">Heat Distribution Inside The Reactor</figcaption>
          </figure>
          <figure>
            <img id="dft-calculation" src={require('../../images/research/dft-calculation.png')}/>
            <figcaption className="figcaption">Heat Distribution Inside The Reactor (2)</figcaption>
          </figure>
          </div>
        </div>

        <div id="yudi">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Dr. rer. Nat. Yudi Rosandi<br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
          <a href="mailto:imadejoni@phys.unpad.ac.id">
          E-Mail: imadejoni@phys.unpad.ac.id
          </a>
          </h5>
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
