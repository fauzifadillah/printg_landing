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
      <h2>Magnetic Stirrer</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">    
          <figure>
            <img id="stirer" src={require('../../images/products/stirer.jpg')}/>
            <figcaption className="figcaption">Magnetic Stirrer</figcaption>
          </figure>     
          <h5>Technology Summary</h5>
          <p>
          Print-G's Magnetic Stirrer is a laboratory device that uses magnetic fields to rotate the stir bars (also called "flea"). The stir bars are immersed in the liquid which also rotates along with the liquid. There are two types of magnetic stirrer is available, namely a magnetic stirrer with hotplat so that the solution can be stirred in hot conditions and magnetic stirrer without hotplat for stirring solution without heating.
          </p>

          <h5>Advantages</h5>
          <li>Lower production cost </li>
          <li>Low treatment</li>
          <li>Temperature control </li>
          <li>RPM control</li>
          <li>User friendly</li>
          <li>Durability</li>
    
          <h5>Potential Applications</h5>
          <li>Laboratory device</li>
          <li>Chemical application</li>
          
          <h5>Type</h5>
            <li>Hotplate magnetic stirrer</li>
            <li>Magnetic stirrer</li>
        </div>
        
        
      </div>
    </div>
    
    
    
  </div>
  </Layout>
)

export default IndexPage
