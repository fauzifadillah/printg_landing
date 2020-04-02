import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/products/style1.css'

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
    <div className="products_all">
      <div className="products_allGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_products_all">
      <h2>Spray Pyrolysis</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">    
          <figure>
            <img id="SprayPir" src={require('../../images/products/SprayPir.jpg')}/>
            <figcaption className="figcaption">Spray pyrolysis system for nanomaterial processing</figcaption>
          </figure>     
          <h5>Technology Summary</h5>
          <p>
          Nano materials have already become an indispensable material for many industrial applications because of their unique size-dependent electrical, magnetic, mechanical, optical and chemical properties in which they fundamentally differ from those of the bulk materials. There are two well-known routes to synthesize inorganic nanoparticles called top down and bottom up processes. The bottom up processing approach is a particles synthesis process starting from atomic or molecular level to nanoparticles via liquid or gas phase process. Spray pyrolysis is one of an example of bottom up process in which the combination of liquid and aerosol processing are used. Print-G, Spray Pyrolysis system can be applied at temperatures of 100 degree Celcius to 700 degree Celcius. Spray Pyrolysis is complemented by an electrostatic precipitator (ESP), which serves as a particle catcher at the end of the system. Rated voltage of ESP is approximately 15 KV. Reactor chamber is divided into three sections, each section have a heating system (Khantal wire) and a temperature sensor (thermocouple). Total heating power of Spray Pyrolysis is 7.5 kilowatt.
          </p>

          <h5>Advantages</h5>
          <li>High purity</li>
          <li>Multicomponent materials</li>
          <li>Controlled spread of the size distribution of the particles</li>
          <li>Size from less than 1 nm to 100 microns; nanophase materials</li>
          <li>Energy efficient in many cases</li>
          <li>Dry process</li>
          <li>Continuous process</li>
          <li>Environmentally safer than most competing processes</li>
          <li>Either a high- or a low-temperature process</li>
          <li>Simple unit operations</li>

          <h5>Potential Applications</h5>
          <li>Laboratory</li>
          <li>Chemical Application</li>
          
          <h5>Type</h5>
            <li>Spray Drying </li>
            <li>Spray Pyrolysis</li>
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
