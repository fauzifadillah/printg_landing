import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/research/style5.css'

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
    <div className="Research_5">
      <div className="Research_5Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research_5">
      <h2>Instrumentations and Imaging Technologies at Nano Scale</h2>
      <div className="CardGroup_research_5">
        <div className="research">
          <h3 className="underline" >Nano Measurement: Particles Size Analyzer and Zeta Potential Measurement System</h3>          
          <h5>● Zeta Potential</h5>
          <p>
          Particles size analyzer is an important measurement system in dispersion of nano materials and the zeta measurement to understandthe dispersion stability of Nano materials suspension.
          </p>
          <figure>
            <img id="zeta" src={require('../../images/research/Zeta.png')}/>
            <figcaption className="figcaption">Scheme of Zeta Potential system</figcaption>
          </figure>

          <h5>● Particle Size Analyzer (PSA)</h5>
          <p>
          PSA for high concentration using ultrasonic as a source of excitation signal in the measurement system.
          </p>
          <figure>
            <img id="zeta_psa" src={require('../../images/research/zeta_psa.png')}/>
            <figcaption className="figcaption">PSA Instrumentation</figcaption>
          </figure>
        </div>

        <div className="research">
          <h3 className="underline" >Luminesence Equipment and Quantum Efficiency Measurement Using Integrating Sphere</h3>          
          <h5>● Integrating Sphere and External Quantum Efficiency (EQE)</h5>
          <p>
          Integrating sphere (IS) is an accurate measurement tool to obtain the lumen of light sources, i.e. LEDs.
          </p>
          <figure>
            <img id="figure_30" src={require('../../images/research/figure_30.png')}/>
            <figcaption className="figcaption">Scheme of Integrating Sphere</figcaption>
          </figure>
          <p>
          Integrating sphere (IS) is an accurate measurement tool to obtain the lumen of light sources, i.e. LEDs.
          </p>
          <h5>● Particle Size Analyzer (PSA)</h5>
          <p>
          Light emitting materials are characterized by their fluorescence quantum yield. For emitting devices like organic and inorganic LEDs the respective physical value is the external quantum efficiency, measured usually by electroluminescence. For measuring EQE of a light emitting device, it is placed inside an integrating sphere and excited by constant current.
          </p>
          <figure>
            <img id="cie" src={require('../../images/research/cie.png')}/>
            <figcaption className="figcaption">Commission de l’Eclairage (CIE) Chromaticity Diagram</figcaption>
          </figure>
        </div>

        <div className="research">
          <h3 className="underline" >Nano Imaging and Spectroscopy</h3>          
          <h5>● Atomic Force Microscopy (AFM)</h5>
          <p>
          Atomic force microscopy (AFM) is important tool to use as a custom-built instrumentation for detecting displacements at the nanometer level for particular purposes. It is attempted to emulate natural ways of functioning on the nano scale. Most exciting developments will come from the science behind the surface morphology related characteristics and properties of nanoscale materials.
          </p>
          <figure>
            <img id="figure_31" src={require('../../images/research/figure_31.png')}/>
            <figcaption className="figcaption">Scheme of AFM</figcaption>
          </figure>
        </div>

        <div id="">
          <h3 className="underline" >Researchers</h3>          
          <h5>
          Prof. Dr. Eng. I Made Joni, M.Sc.<br/>
          Prof. Dr. Eng. Camellia Panatarani, M.Si<br/>
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
