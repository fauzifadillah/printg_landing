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
      <h2>Nano Silica</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">     
          <h5>Technology Summary</h5>
          <p>
          Print-G Si02 product has particle size 100-200 nm. Si02 is a white or colorless crystalline compound found mainly as quartz, sand, flint, and many other minerals. Silica is an important ingredient to manufacture a wide variety of materials.
          </p>

          <h5>Advantages</h5>
          <li>Size: 100-200nm</li>
          <li>Homogen</li>

          <h5>Potential Applications</h5>
          <li>Manufacture of paints</li>
          <li>adhesives</li>
          <li>Fabrics and Coatings</li>
          <li>Plastics</li>
          <li>Rubber</li>
          <li>Printer inks</li>
          <li>Ceramics</li>
          <li>Roofing</li>
          <li>Cosmetics</li>
          <li>Pharmaceuticals</li>
          <li>Automotive</li>
          <li>and others</li>
          
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
