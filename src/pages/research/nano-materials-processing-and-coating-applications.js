import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import Section from "../../components/Section"
import Wave from '../../components/Wave'
import styled from "styled-components"
import NoWaveSection from "../../components/NoWaveSection"
import '../../components/css_pages/research/style1.css'

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
    <div className="Research_1">
      <div className="Research_1Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research_1">
      <h2>Nano Materials Processing and Coating Applications</h2>
      <div className="CardGroup_research_1">
        <div className="research">
          <h3 className="underline" >Synthesis and Dispersion of Nanomaterials</h3>          
          <p>Nanomaterials have already become an indispensable material for many industrial applications because of their unique size-dependent electrical, magnetic, mechanical, optical and chemical properties in which it fundamentally differs from those of the bulk materials. There are two well-known routes to synthesize inorganic nanoparticles such as top down and bottom up processes as described in Figure. The bottom up processing approach is a particles synthesis process starting from atomic or molecular level to nanoparticles via liquid or gas phase process. Spray pyrolysis is one of an example for bottom up process in which the combination of liquid and aerosol processing are used. On the other hand, top down synthesis approach is a particle synthesis process starting from bulk material and pass through mechanical grinding or comminuting to form particles either submicron and/or nano-sized particles.
             In the case of bottom up synthesis approach, submicron or nano-sized particles are produced in the gas or liquid phase as a dry powder or with a drying step after the synthesis. Therefore in many applications nanoparticles have to be dispersed in a liquid into primary particles or to a definite agglomerate size. The dispersion processing step, namely post synthesis process, is essential for the applications of inorganic nanoparticles for science and technology as materials, pigments and cosmetics products.
             When nanoparticle is used for an inclusion of particles as reinforcement, dispersion of nanoparticle is indispensable because nanoparticles in various liquids tend to agglomerate (Figure). Poor dispersion stability will not give rise to desired properties of nanoparticles because agglomerated particles usually occurs during the application process such as polymerization, electro spinning, spin coating, spray coating, etc. Therefore, improving dispersion stability of nanoparticles in various liquids is important for the applications of inorganic nanostructured functional materials.
          </p>
          <figure>
          <img id="schematic" src={require('../../images/research/Schematic.jpg')}/>
          <figcaption className="figcaption">Conventional Graphene Synthesis</figcaption>
          </figure>
          <p>
          Schematic representation of top-down approach, bottom-up approach and post synthesis process (dispersion) for nanoparticles preparation.
          </p>
        </div>

        <div className="research">
          <h3 className="underline" >Synthesis of Graphene and Carbon Nano Fiber</h3>          
          <p>
          Graphene is one atomically thick crystal of carbon which is stronger than steel but flexible, it is transparent for light, and conduct electricity (gapless semiconductor). Thus graphene will be useful in wide applications in the near future.
          </p>
          <div className="double_fig">
          <figure>
            <img id="figure201" src={require('../../images/research/Figure201.jpg')}/>
            <figcaption className="figcaption">Conventional Graphene Synthesis</figcaption>
          </figure>
          <figure>
            <img id="CarbonNanomaterialApplications" src={require('../../images/research/CarbonNanomaterialApplications.jpg')}/>
            <figcaption className="figcaption">Carbon Nanomaterial Applications</figcaption>
          </figure>
          </div>
          <p>
            Challenges:
            <h5>•    Deliver a method for large scale graphene production </h5>
            <h5>•    Functionalization of graphene in various science and technology related materials</h5>
            Carbon nanofibers (CNFs), vapor grown carbon fibers (VGCFs), or vapor grown carbon nanofibers (VGCNFs) are cylindrical nanostructures with graphene layers arranged as stacked cones, cups or plates. Carbon nanofibers with graphene layers wrapped into perfect cylinders are called carbon nanotubes. Carbon nanofibers have been recently synthesized due to their unique properties, which have generated an interest in its wide range of applications, including selective adsorption, hydrogen storage, polymer reinforcement and catalysts support etc. To produce carbon nanostructures three main techniques are generally used: arc discharge (plasma method), laser ablation, and chemical vapour deposition (CVD). Several Applications of carbon nanomaterials produced by CNT Co. LTD is shown in Figure (below) in various liquids. It is important for the applications of inorganic nanostructured functional materials.
          </p>
        </div>

        <div className="research">
          <h3 className="underline" >Synthesis of Nanomaterials (Chitosan, Au, ZnO, SiO2, TiO2, Al2O3, Al (OH)3 , etc.) </h3>          
          <p>
          Synthesis of various Nanomaterials are usually conducted by solid, liquid and sol-gel methods. Properties of prepared nanomaterials not only depends on the size and size distribution of particles but also depends on the morphology, crystalinity and surface active agents of the nanomaterials. Hence proper selection of precursor and synthesis methodology is crucial in order to get the desired properties of nanomaterials.  
          </p>
          <div className="double_fig">
          <figure>
            <img id="sintetisnano" src={require('../../images/research/sintetisnano.jpg')}/>
            <figcaption className="figcaption">Nanoparticles formation by various methods</figcaption>
          </figure>
          <figure>
            <img id="pcsp" src={require('../../images/research/pcsp.jpg')}/>
            <figcaption className="figcaption">Pulse combustion spray pyrolysis system and apparatus</figcaption>
          </figure>
          </div>
          <p>
            Challenges: <br/>
            The challenges in the synthesis of nanomaterials is selecting the processing method in accordance with the properties and also cost effective products (i.e. availability of the raw materials and cost of processing at high scale production). Various common nanomaterial with wide applications are  Chitosan, Au, ZnO, SiO2, TiO2, and Al2O3.
          </p>
        </div>

        <div className="research">
          <h3 className="underline" >Dispersion of Nanomaterials and Surface Modification</h3>          
          <p>
          When dispersing nanomaterials, i.e in organic, surface modification is indispensable in order to achieve stable dispersion.
          </p>
          <div className="double_fig">
          <figure>
            <img id="Beadmill1" src={require('../../images/research/Beadmill1.jpg')}/>
            <figcaption className="figcaption">Beads Milling</figcaption>
          </figure>
          <figure>
            <img id="beadmilldalam" src={require('../../images/research/beadmilldalam.jpg')}/>
            <figcaption className="figcaption">Reactor design and images of the developed reactor</figcaption>
          </figure>
          </div>
          <p>
            Challenges: <br/>
            The challenges in dispersion are determination of proper processing method; selecting a suitable surface active agent for particular nanomaterials synthesis and application; to prevent degradation of the excellent properties of nanomaterials.
          </p>
        </div>

        <div className="research">
          <h3 className="underline" >Paints and Coating Applications</h3>          
          <p>
          Paint is a large market in Indonesia, however the market share of particular high technology functionality of the coating are dominated by imported products. Thus the challenges is to functionalize the nanomaterial which has been successfully synthesized (Phosphors, TiO2, SiO2, Al(OH)3, Chitosan, etc.) into paints and coatings technology by surface modification and introducing surface active agent to achieve excellent composite.
          </p>
          
          <figure>
            <img id="Figure26" src={require('../../images/research/Figure26.jpg')}/>
            <figcaption className="figcaption">Nanomaterial applications for paints  </figcaption>
          </figure>
          
          <div className="triple_fig">

          <figure>
            <img id="paincoating1" src={require('../../images/research/paincoating1.jpg')}/>
            <figcaption className="figcaption">Nanomaterial for fluorescence</figcaption>
          </figure>

          <figure>
            <img id="paincoating2" src={require('../../images/research/paincoating2.jpg')}/>
            <figcaption className="figcaption">Nanomaterial for self cleaning paint	</figcaption>
          </figure>

          <figure>
            <img id="paincoating4" src={require('../../images/research/paincoating4.jpg')}/>
            <figcaption className="figcaption">Nanomaterial for anti-bacterial and fire-retardant paints</figcaption>
          </figure>
          </div>
        </div>

        <div className="research">
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
