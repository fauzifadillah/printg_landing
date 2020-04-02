import React from "react"
import Layout from '../components/layout'


import styled from "styled-components"
import '../components/css_pages/graphene.css'

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
    <div className="Graphene">
      <div className="GrapheneGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_graphene">
      <h2>Graphene</h2>
      <div className="CardGroup_graphene">
        <div className="graphene">
          <h3 className="underline" ></h3>          
          <p>
          Graphene is one atomically thick crystal of carbon which is stronger than steel but flexible, it is transparent for light, and conduct electricity (gapless semiconductor). Graphene research is indeed very exciting, however producing graphene is not easy when high-quality sheets and single layer sheet is required. Graphene is possible to produce from natural graphite by coventinal <a href="https://en.wikipedia.org/wiki/Hummers%27_method">hummer method</a> or modified of hummer method. On the otherhand, <a href="https://www.nature.com/subjects/synthesis-of-graphene">synthetic graphene</a> produce by using CVD based processes. Synthesis of graphene via chemical vapour deposition (CVD) of methane gas onto a copper substrate is the most common way of producing the quantity and quality of material required for electronic applications. CVD is an industrially scalable process, but graphene produced in this way is prone to contamination from chemical agents used to remove the growth substrate. It is also a complex and expensive technique, wasteful of the copper and other materials used. Several <a href="https://www.graphene-info.com/companies">companies</a> are producing Graphene today in small volumes, and there's a lot of research going into developing new ways to mass produce the material.
          </p>
          <p>
          Challenges:
            <h5>•    Deliver a method for large scale graphene production </h5>
            <h5>•    Functionalization of graphene in various science and technology related materials</h5>
          Carbon nanofibers (CNFs), vapor grown carbon fibers (VGCFs), or vapor grown carbon nanofibers (VGCNFs) are cylindrical nanostructures with graphene layers arranged as stacked cones, cups or plates. Carbon nanofibers with graphene layers wrapped into perfect cylinders are called carbon nanotubes. Carbon nanofibers have been recently synthesized due to their unique properties, which have generated an interest in its wide range of applications, including selective adsorption, hydrogen storage, polymer reinforcement and catalysts support etc. To produce carbon nanostructures three main techniques are generally used: arc discharge (plasma method), laser ablation, and chemical vapour deposition (CVD).
          </p>
        </div>
        </div>
    </div>
    <div className="Cards_graphene">
      <h2>Graphene Web Link, Database & News</h2>
      <div className="CardGroup_graphene_info">
        <div className="graphene">
          <h3 className="underline" >Weblink & News</h3>          
          <a href="https://en.wikipedia.org/wiki/Graphene">1. Wikipedia: Graphene</a><br/>
          <a href="http://www.physics.org/article-questions.asp?id=67">2. Physics.org: All About Graphene</a><br/>
          <a href="https://www.explainthatstuff.com/graphene.html">3. explainthatstuff!: Graphene</a><br/> 
          <a href="https://www.graphene-info.com/">4. Graphene-Info</a><br/>      
          <a href="http://www.graphenesq.com/">5. Square Inc. (South Korea)</a><br/>  
          <a href="https://www.idtechex.com/research/articles/china-to-dominate-graphene-commercialization-00013479.asp">6. China to dominate graphene commercialization</a><br/>  
          <a href="https://technologygateway.nasa.gov/featurestory/nasa-langley-technology-further-enhances-graphene-functions">7. NASA Langley’s Technology Further Enhances Graphene Functions</a><br/>            
        </div>
        <div className="graphene">
          <h3 className="underline" >Graphene Statistic and Databases</h3>          
          <a href="https://www.grandviewresearch.com/industry-analysis/graphene-industry">1. Graphene Market review and trend analysis</a><br/>
          <a href="https://graphenest.com/graphene-applications/">2. Graphene Market Applications</a><br/>
          <a href="https://graphene-flagship.eu/project/Pages/About-Graphene-Flagship.aspx">3. About Graphene Flagship</a><br/> 
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5012252/">4. Graphene enterprise: mapping innovation and business development in a strategic emerging technology</a><br/>      
          <a href="https://minerals.usgs.gov/minerals/pubs/commodity/graphite/">5. Graphite Statistics and Information</a><br/>  
          <a href="https://lankagraphite.com.au/">6. Lanka Graphite </a><br/>  
        </div>
        <div className="graphene">
          <h3 className="underline" >Graphene Research Centre</h3>          
          <a href="https://www.graphene.manchester.ac.uk/">1. Graphene, The University of Manchaster</a><br/>
          <a href="https://www.graphene.cam.ac.uk/">2. Cambridge Graphene Centre (USA)</a><br/>
          <a href="http://www.cng.dtu.dk/about-1-">3. Center for Nanostructured Graphene, Danmarks Tekniske Universitet</a><br/> 
          <a href="https://graphene.nus.edu.sg/">4. Graphene Research Centre, NUS Singapore</a><br/>      
          <a href="https://ecms.adelaide.edu.au/graphene-research-hub/">5. ARC Hub Research for Graphene (The University of Adelaide)</a><br/>  
        </div>
        <div className="graphene">
          <h3 className="underline" >Graphene Policy and Association</h3>          
          <a href="https://russellgroup.ac.uk/policy/case-studies/eu-and-uk-investments-supporting-the-development-and-application-of-graphene/">1. EU and UK investments supporting the development and application of graphene</a><br/>
          <a href="https://ktn-uk.co.uk/news/british-firm-announces-plans-for-chinese-graphene-manufacturing-facility">2. British firm announces plans for Chinese graphene manufacturing facility</a><br/>
          <a href="http://www.arc.gov.au/news-media/media-releases/new-frontiers-graphene">3. A new Industrial Transformation Research Hub will focus on developing unique high-value graphene products and devices for industry.</a><br/> 
        </div>
        <div className="graphene">
          <h3 className="underline" >Graphene Journal & Conference</h3>          
          <a href="https://www.eventbrite.com/e/22nd-international-conference-on-graphene-carbon-nanotubes-and-nanostructures-cse-as-tickets-45712143251">1. 22nd International Conference on Graphene, Carbon Nanotubes and Nanostructures</a><br/>
          <a href="https://www.nature.com/news/uk-graphene-inquiry-reveals-commercial-struggles-1.19840">2. UK graphene inquiry reveals commercial struggles</a><br/>
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
