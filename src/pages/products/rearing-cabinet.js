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
      <h2>Rearing Cabinet</h2>
      <div className="CardGroup_products_all">
        
        <div data-aos="fade-right" className="research">    
          <figure>
            <img id="rearing" src={require('../../images/products/rearing.jpg')}/>
            <figcaption className="figcaption">Rearing Cabinet</figcaption>
          </figure>     
          <h5>Technology Summary</h5>
          <p>
          Print-G's Rearing Cabinet (climatic chamber) is used to maintain the caterpillar (or other species) where the environmental conditions in the cabinet can control (temperature, humidity and lighting). This rearing cabinet is developed including iron-plate incubator cabinet equipped with strict regulation of air condition with a series of acrylic-plastic rearing chambers arranged inside the cabinet on adjustable shelf brackets. The doors are provided with a double acrylic window. A heater and air pump were installed on the top and behind the cabinet, respectively. The cabinet is painted both side and is provided with ten 5-watt fluorescent lights inside the cabinet and equipped with the timer for controlling light and dark timing. The heating element is controlled by microcontroller through a solid-state relay and permit temperature control around 30 to 40° C.
          </p>

          <h5>Advantages</h5>
          <li>Lower production cost </li>
          <li>Low treatment</li>
          <li>Temperature, Humidity and Light control </li>
          <li>User Friendly</li>
    
          <h5>Potential Applications</h5>
          <li>Climatic chamber</li>
          
          <h5>Type</h5>
            <li>Temperature, Humidity and Light control</li>
        </div>
        
        
      </div>
    </div>
    
    
    
  </div>
  </Layout>
)

export default IndexPage
