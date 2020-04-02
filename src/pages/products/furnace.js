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
      <h2>Furnace</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">    
          <figure>
            <img id="furnace" src={require('../../images/products/furnace.jpg')}/>
            <figcaption className="figcaption">Furnace</figcaption>
          </figure>     
          <h5>Technology Summary</h5>
          <p>
          Print-G's High Temperature Furnace is used for laboratory scale. These furnaces can be applied at temperatures of 100 degree Celcius to 1000 degree Celcius. it has 2 types of control, that is standard temperature control, and standard/programmable temperature controls. The heating element is supported by a refractory ceramic that keep the heating wire from touching other objects and create a furnace chamber’s temperature uniform. The chamber provided input and output channels to allow for injection of specific gas in the processing of materials.
          </p>

          <h5>Advantages</h5>
          <li>Lower production cost </li>
          <li>Low treatment</li>
          <li>Programmable Temperature control </li>
          <li>Heating up fast</li>
          <li>Good temperature uniformity</li>
          <li>Durability</li>
          <li>User Friendly</li>
    
          <h5>Potential Applications</h5>
          <li>Laboratory furnace</li>
          <li>Chemical application</li>
          
          <h5>Type</h5>
            <li>Nonprogramable controller furnace</li>
            <li>Programable controller furnace</li>
        </div>
        
        
      </div>
    </div>
    
    
    
  </div>
  </Layout>
)

export default IndexPage
