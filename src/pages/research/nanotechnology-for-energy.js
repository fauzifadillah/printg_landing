import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import NoWaveSection from "../../components/NoWaveSection"
import '../../components/css_pages/research/style2.css'

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
    <div className="Research_2">
      <div className="Research_2Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research_2">
      <h2>Nanotechnology for Energy</h2>
      <div className="CardGroup_research_2">
        <div className="research">
          <h3 className="underline" >Luminescence Materials</h3>          
          <figure>
          <img id="Figure13" src={require('../../images/research/Figure13.jpg')}/>
          <figcaption className="figcaption">Product</figcaption>
          </figure>
          <p>
            Luminescent materials such as phosphors are materials that emit light (infrared to ultraviolet) under external energy excitation. The incident energy, in the form of high energy electron, photons, or electric field, can then be re-emitted in the form of electromagnetic radiation.<br/>
            <br/>Applications: 
            <h5>·    Light-emitting diodes (LEDs) emit light via electro-luminescence.</h5>            
            <h5>·    Phosphors, materials that emit light when irradiated by higher-energy electromagnetic radiation or particle radiation.</h5>            
            <h5>·    Phosphor thermometry, measuring temperature using phosphorescence.</h5>            
            <h5>·    Thermoluminescence dating</h5>            
            <h5>·    Thermoluminescent dosimeter.</h5>            
          </p>
          
          <p>
              Challenges: <br/>
                Phosphors (inorganics luminescent material) have been extensively investigated due to their potential application especially for lighting. Despite various methods applied in preparation of phosphors, the common goals were to obtain intrinsic properties that determine the efficiency of phosphors performance. Generally, these properties could be improved by better crystallization and purifying the materials. Current challenges on phosphors research is to obtain desired phosphors for lighting application: parameters include luminescent features and high quantum efficiency, reduced RE usage for host phosphor, morphology and size, preparation/synthesis methods of new phosphors.
          </p>
        </div>
        <div id="imjcp" className="research">
          <h3 className="underline" >Researchers</h3>          
          <h5>
          Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
          Prof. Dr. Eng. Camellia Panatarani <br/>
          <a href="mailto:imadejoni@phys.unpad.ac.id">
          E-Mail: imadejoni@phys.unpad.ac.id
          </a>
          </h5>
          <div className="double_fig">

          <figure>
            <img id="imj" src={require('../../images/research/imadejoni.jpg')}/>
            <figcaption className="figcaption">Prof. Dr. Eng. I Made Joni, M.Sc.</figcaption>
          </figure>

          <figure>
            <img id="cp" src={require('../../images/research/cpanatarani.jpg')}/>
            <figcaption className="figcaption">Prof. Dr. Eng. Camellia Panatarani </figcaption>
          </figure>

          </div>
        </div>

        <div className="research">
          <h3 className="underline" >Coal Bed Methane</h3>          
          <figure>
            <img id="Figure15" src={require('../../images/research/Figure15.jpg')}/>
            <figcaption className="figcaption">Coal Bead Methane (CBM) work flow</figcaption>
          </figure>
          <p>
          Methane is an alternative renewable resources obtained from anaerobic activities of microbes in coal bed methane applied for low grade coal.
          </p>
          <p>
            Challenges: <br/>
            The challenges is development of microbial consortium from cow and cattle dung for coal-bed methane. The behaviour of the mineral within the coal and type of coal used (lignite, bituminous and subbituminous) may influences the microbe’s survival and methane production.
          </p>
        </div>
        <div id="elin">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Prof. Dr. Ellin Harlia. <br/>
            Assc. Prof. Dr. Ir. Tb Benito Achmad Kurnani, D.Est. <br/>
            Dr. Eulis Tanti Marlina, MP. <br/>
            Assc. Prof. Dr. Ir. Ahmad Helman Hamdani, M.Si. <br/>
            Prof. Dr. Eng. Camellia Panatarani <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
          <a href="mailto:ellin.harlia@unpad.ac.id">
          E-Mail: ellin.harlia@unpad.ac.id
          </a>
          </h5>
        </div>

        <div className="research">
          <h3 className="underline" >Electrochemical: Battery and Fuel Cell/ HHO Generator </h3>          
          <p>
          Synthesis of various Nanomaterials are usually conducted by solid, liquid and sol-gel methods. Properties of prepared nanomaterials not only depends on the size and size distribution of particles but also depends on the morphology, crystalinity and surface active agents of the nanomaterials. Hence proper selection of precursor and synthesis methodology is crucial in order to get the desired properties of nanomaterials.  
          </p>
          <div className="double_fig">
          <figure>
            <img id="Figure171" src={require('../../images/research/Figure171.jpg')}/>
            <figcaption className="figcaption">Metal-air Battery</figcaption>
          </figure>
          <figure>
            <img id="Figure18" src={require('../../images/research/Figure18.jpg')}/>
            <figcaption className="figcaption">Metal-air Battery (2)</figcaption>
          </figure>
          </div>
          <p>
            The metal-air cell is one type of water activated cell using metals as anodes and oxygen as cathodes. The advantages of water activated battery can provide the demand for high energy density, long life and low temperature performance. The immediate demand of low cost and environmental friendly alternative energy supply leads to the development of metal-air batteries. After the use, the ‘solid fuel’ anodes and electrolyte could be mechanically replaced and the cathodes could be simply reused. Metal-oxygen pairs have different electrochemical characteristics. Some pairs with their theoretical characteristics such as specific capacity and specific energy density.
            <br/>
            Li-O2 pair has the highest specific energy and capacity; unfortunately the difficulties in handling Lithium restricts its use in aqueous electrolyte. Another pair with high capacity and energy density is Al-O2 and Mg-O2 type. Focus on Mg-air battery gained attention simply due to raw material availability and the higher voltage of Magnesium compared to Aluminum.  
          </p>
        </div>
        <div id="metalair">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Prof. Dr. Eng. Camellia Panatarani <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
            Dr. Sahrul Hidayat, M.Si. <br/>
          <a href="mailto:c.panatarani@phys.unpad.ac.id">
          E-Mail: c.panatarani@phys.unpad.ac.id
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
