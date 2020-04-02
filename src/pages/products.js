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
import '../components/css_pages/products.css'

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
    <div className="Products">
      <div className="ProductsGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards">
      <h2>Products</h2>
      <div className="CardGroups" id="products">
        <div>
        <h5>Spray Pyrolysis</h5>
        <Link to="/products/spray-pyrolysis">
        <Card
            to={"/products/spray-pyrolysis"} 
            image={require('../images/products/SprayPi.jpg')}
        />
        </Link>
        </div>
        <div>
        <h5>Nano Silica</h5>
        <Link to="/products/nano-silica">
        <Card 
            image={require('../images/products/silica.jpg')}
        />
        </Link>
        </div>
        <div>
        <h5>Rearing Cabinet</h5>
        <Link to="/products/rearing-cabinet">
        <Card 
            image={require('../images/products/rearingcabinet.jpg')}
        />
        </Link>
        </div>
        <div>
        <h5>Magnetic stirrer</h5>
        <Link to="/products/magnetic-stirrer">
        <Card 
            image={require('../images/products/magnetikstirer.jpg')}
        />
        </Link>
        </div>
        <div>
        <h5>Furnace</h5>
        <Link to="/products/furnace">
        <Card 
            image={require('../images/products/furnacec.jpg')}
        />
        </Link>
        </div>
        <div>
        <h5>Bubble</h5>
        <Link to="/products/bubble">
        <Card 
            image={require('../images/products/Bubblefine.jpg')}
        />
        </Link>
        </div>
        
      </div>
    </div>
    {/* <NoWaveSection
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About PrintG"
      text="Nanotechnology and Graphene Products Centre (Pusat Riset Pengembangan Institusi Nanoteknologi dan Graphene) named PrintG is a Products Centre at Directorate of Products and Community Development, Universitas Padjadjaran. PrintG is actively engaged in Nano Science and Technology Products & Business Development (RBD) aims to promote innovative technology for Indonesian industries enabling globally competitive scope and to contribute novel alternatives to address the present and future key social challenges. Enabling Nanotechnology to solve real world problems is expected to provide new opportunities with broad perspective of applications. The significant contributions for PrintG are in the field of biomaterial, pharmacy, sustainable energy, sustainable agro & food, added values of natural Productss and clean water for a growing population."
    /> */}
    
    
  </div>
  </Layout>
)

export default IndexPage
