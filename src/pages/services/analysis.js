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
    <div className="services_2">
      <div className="services_2Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_services_2">
      <h2>Analysis</h2>
      <div className="CardGroup_services_2">
        
        <div data-aos="fade-right" className="research">
          <h3 className="underline" >Photoluminescence</h3>          
          <p>
          Photoluminescence (abbreviated as PL) is light emission from any form of matter after the absorption of photons (electromagnetic radiation). It is one of many forms of luminescence (light emission) and is initiated by photoexcitation (i.e. photons that excite electrons to a higher energy level in an atom), hence the prefix photo. Following excitation various relaxation processes typically occur in which other photons are re-radiated. Time periods between absorption and emission may vary: ranging from short femtosecond-regime for emission involving free-carrier plasma in inorganic semiconductors up to milliseconds for phosphorescent processes in molecular systems; and under special circumstances delay of emission may even span to minutes or hours. Observation of photoluminescence at a certain energy can be viewed as an indication that an electron populated an excited state associated with this transition energy. While this is generally true in atoms and similar systems, correlations and other more complex phenomena also act as sources for photoluminescence in many-body systems such as semiconductors. A theoretical approach to handle this is given by the semiconductor luminescence equations.
          </p>
          <figure>
            <img id="Perkin-Elmer-LS55" src={require('../../images/services/Perkin-Elmer-LS55.jpg')}/>
            <figcaption className="figcaption">PL - Perkin Elmer LS 55</figcaption>
          </figure>
        </div>
        
        <div data-aos="fade-left" className="research">
          <h3 className="underline" >XRF</h3>          
          <p>
          X-ray fluorescence (XRF) is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by bombarding with high-energy X-rays or gamma rays. The phenomenon is widely used for elemental analysis and chemical analysis, particularly in the investigation of metals, glass, ceramics and building materials, and for research in geochemistry, forensic science, archaeology and art objects such as paintings and murals.
          </p>
          <figure>
            <img id="rigaku" src={require('../../images/services/rigaku.jpg')}/>
            <figcaption className="figcaption">XRF - Rigaku NEX-CG</figcaption>
          </figure>
        </div>

        <div data-aos="fade-right" className="research">
          <h3 className="underline" >Baterry Analysis</h3>          
          <p>
          An electric battery is a device consisting of one or more electrochemical cells with external connections provided to power electrical devices such as flashlights, smartphones, and electric cars. When a battery is supplying electric power, its positive terminal is the cathode and its negative terminal is the anode. The terminal marked negative is the source of electrons that when connected to an external circuit will flow and deliver energy to an external device. When a battery is connected to an external circuit, electrolytes are able to move as ions within, allowing the chemical reactions to be completed at the separate terminals and so deliver energy to the external circuit. It is the movement of those ions within the battery which allows current to flow out of the battery to perform work. Historically the term "battery" specifically referred to a device composed of multiple cells, however the usage has evolved additionally to include devices composed of a single cell.
          </p>
          <figure>
            <img id="alatukurbatere" src={require('../../images/services/alatukurbatere.jpg')}/>
            <figcaption className="figcaption">Baterry Tester</figcaption>
          </figure>
        </div>

        <div data-aos="fade-left" className="research">
          <h3 className="underline" >Particle size analysis n Zeta potential </h3>          
          <p>
            Particle size measurement, or simply particle sizing is the collective name of the technical procedures, or laboratory technique which determines the size range, and/or the average, or mean size of the particles in a powder or liquid sample.Particle size analysis is part of particle science, and its determination is carried out generally in particle technology laboratories.The particle size measurement is typically achieved by means of devices called Particle Size Analyzers (PSA) which are based on different technologies, such as high definition image processing, analysis of Brownian motion, gravitational settling of the particle and light scattering (Rayleigh and Mie scattering) of the particles.The particle size can have considerable importance in a number of industries including the chemical,food, mining, forestry, agriculture, nutrition, pharmaceutical, energy, and aggregate industries.
            <br/>
            Zeta potensial is a scientific term for electrokinetic potential in colloidal dispersions In the colloidal chemistry literature, it is usually denoted using the Greek letter zeta (ζ), hence ζ-potential. From a theoretical viewpoint, the zeta potential is the electric potential in the interfacial double layer (DL) at the location of the slipping plane relative to a point in the bulk fluid away from the interface. In other words, zeta potential is the potential difference between the dispersion medium and the stationary layer of fluid attached to the dispersed particle.
          </p>
          <figure>
            <img id="Horiba_SZ-100" src={require('../../images/services/Horiba_SZ-100.jpg')}/>
            <figcaption className="figcaption">PSA & Zeta Potensial - Horiba SZ-100</figcaption>
          </figure>
        </div>

        <div data-aos="fade-right" className="research">
          <h3 className="underline" >FTIR</h3>          
          <p>
            Fourier-transform infrared spectroscopy (FTIR) is a technique used to obtain an infrared spectrum of absorption or emission of a solid, liquid or gas. An FTIR spectrometer simultaneously collects high-spectral-resolution data over a wide spectral range. This confers a significant advantage over a dispersive spectrometer, which measures intensity over a narrow range of wavelengths at a time.
            <br/>
            The term Fourier-transform infrared spectroscopy originates from the fact that a Fourier transform (a mathematical process) is required to convert the raw data into the actual spectrum. For other uses of this kind of technique, see Fourier-transform spectroscopy.
          </p>
          <figure>
            <img id="FTIR" src={require('../../images/services/FTIR.jpg')}/>
            <figcaption className="figcaption">FTIR - Thermofisher iD5</figcaption>
          </figure>
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
