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
      <h2>Fine Bubble Generator</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">    
          <figure>
            <img id="bubblefinepos" src={require('../../images/products/bubblefinepos.jpg')}/>
            <figcaption className="figcaption">Fine Bubble Generator</figcaption>
          </figure>     
          <h5>Technology Summary</h5>
          <p>
          Print-G Fine bubble Generator can produce small bubbles that can dissolve in the water for water treatment, waste, aeration, etc. Fine Bubble can be applied for manufacturing process to obtain safety product and also nano structure edible film for active protective product.
          </p>

          <h5>Advantages</h5>
          <li>Micro-nano bubble size</li>
          <li>Without adding gas pump</li>
          <li>Lower production cost</li>
          <li>Low treatment</li>
          <li>Durability</li>
          <li>User friendly</li>
    
          <h5>Potential Applications</h5>
          <li>Waste water treatment</li>
          <li>Aeration</li>
          
          <h5>Type</h5>
            <li>125 watt</li>
            <li>250 watt</li>
            <li>750 watt</li>
        </div>
        
        
      </div>
    </div>
    
    
    
  </div>
  </Layout>
)

export default IndexPage
