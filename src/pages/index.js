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

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// // AOS.init();

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
    <div className="Hero">
      <div className="HeroGroup">
      <Link to='#about'>
      <img src={require('../images/printg_stroke.png')} alt="" width="256"/>
      </Link> 
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
      </div>
    </div>
    
    <div className="Cards">
      <h2>Vision and Mission</h2>
      <div className="CardGroup">
      <h3 data-aos="fade-right"id="about">A global Centre of Excellence for nanotechnology & graphene focus on applications and transforming into a tool to solve real-world problems with interdisciplinary approaches</h3>
      <h3 data-aos="fade-left">To conduct and support research, development, design and engineering in nanotechnology & graphene and transfer the technology to industrial sector in order to increase Indonesia’s competitiveness and improve the quality of life and the environment with interdisciplinary approaches</h3>
      </div>
    </div>
    <NoWaveSection 
      image={require('../images/bokeh3.jpg')}
      logo={require('../images/printg_stroke.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene Research Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a Research Centre at Directorate of Research and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology Research & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural resources and clean water for a growing population."
    />
    <div className="Cards">
      <h2>Our History</h2>
      <div className="CardGroupHistory">
      <p id="hist_step1" data-aos="fade-left">PrintG was established for the need of multi - disciplinary approachs in Nano Technology Development. Nanotechnology Research Group (NTRG) was initially established in year 2005 in the Department of Physics merely focusing on the synthesis of nanomaterials for luminescence applications, financial support such as from Directorate of Higher Education, Ministry of Research and Technology and Indonesia Toray Science Foundation, Loreal Science Foundation were acquired. Many equipments supporting the synthesis and dispersion of nanomaterials were developed and received financial support for research under PUNAS Scheme (National Research Excellent Scheme) from Ministry of Research, Technology and Higher Education.  </p>
      <p id="hist_step2" data-aos="fade-right">Since 2013, NTRG was a authorized research laboratory with the name 'Laboratory of Instrumentation System and Functional Material Processing' (well-known as eSPe Lab) in the Department of Physics.  Many collaborations were established with Industries, laboratories/Faculties within the University and other local University and Abroad Institutions/Industries. Within the University, we established research collaborations with Petrography Lab., Faculty of Dentistry, Faculty of Husbandry, Faculty of Agriculture, and Faculty of Pharmacy. From other Universities, we established collaborations with Corrosion Laboratory Institute Technology of Sepuluh Nopember (ITS), Thermal Fluid Engineering and Material Processing Hiroshima University, Chemical Engineering Tokyo Univ. of Agriculture Technology and Dept. of Resources and Environmental Engineering, Waseda University. Actively collaborates with Industries such as PT. Grafindo Nusantara, PT. Trans Sulawesi Tenggara, PT. Trans Sulawesi Sejahtera, PT. Trans Jawa Sulawesi, PT. Ultimate Carbometal Nusantara Dua,   PT. Carbonindo Nusantara Jaya, PT. Gunung Sabak, PT. Wali Mining, PT. Latambaga Raya, PT. Lasolo Karya Sejahtera PT. Eagle Rich Nusantara  and PT. Mekongga Sejahtera.</p>
      <p id="hist_step3" data-aos="fade-left">In order to enhance the spectrum of multi disciplinary approaches with broad applications, likewise National and International Collaborations, the development of Institution for Nanotechnology was proposed at the University level. Thus, in year of 2014 the Institutional Research Centre of Nanotechnology and Graphene was finally established (SK Rektor No. 3761/UN6.RKT/Kep/HK/2015).</p>
      </div>
    </div>

  </div>
  </Layout>
)

export default IndexPage
