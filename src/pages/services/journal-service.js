import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/services/style2.css'

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
    <div className="journals">
      <div className="journalsGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_journals">
      <h2>Journal Service</h2>
      <div className="CardGroup_journals">
        
        <div className="research">
        <div className="pre">
        <span><strong>Journal of Powder Technology and Advanced Functional Materials (JPTAFM)&nbsp;</strong></span><br/><br/><span ><a href="https://www.jpfoundation.or.id/publication/journal">J. Pow. Tech. Adv. Func. Mater.</a></span><br/><br/>Copyright © 2018 Nanotechnology and Graphene Research Centre, Universitas Padjadjaran, Production and hosting by JP Global Transtech.<br/><br/>Peer review under responsibility of Nanotechnology and Graphene Research Centre, Universitas Padjadjaran
        </div>

        </div>
        
        <div data-aos="fade-right" id="metalair">
          <h3 className="underline" >Editor-in-Chief:</h3>          
          <a href="mailto:imadejoni@phys.unpad.ac.id">
          I Made Joni
          </a>
          <p>
            Universitas Padjadajaran, Indonesia <br/>
            Nanotechnology and Graphene Research Centre, Padjadjaran University, Indonesia
          </p>
          <a href="https://orcid.org/0000-0001-5949-3418">ORCID</a>&nbsp;,&nbsp;<a  href="http://www.scopus.com/inward/authorDetails.url?authorID=29067882800&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 29067882800</a>
        </div>

        <div data-aos="fade-left" id="metalair">
          <h3 className="underline" >Managing Editor:</h3>          
          <a href="mailto:c.panatarani@phys.unpad.ac.id">
          Camellia Panatarani
          </a>
          <p>
            Universitas Padjadajaran, Indonesia <br/>
            Nanotechnology and Graphene Research Centre, Padjadjaran University, Indonesia
          </p>
          <a href="https://orcid.org/0000-0001-9936-8574">ORCID</a>&nbsp;,&nbsp;<a  href="https://www.scopus.com/authid/detail.uri?authorId=6506937535" target="externalIdentifier.value">Scopus Author ID: 29067882800</a>
        </div>

        <div data-aos="fade-down" id="metalair">

        <h3 ><strong>Editorial Boards:</strong></h3>
    <strong><a href="mailto:muchtaridi@unpad.ac.id">Muchtaridi</a></strong>
    <p>
        Universitas Padjadajaran, Indonesia
    </p>
    <a href="https://orcid.org/0000-0002-6156-8025">ORCID</a>;&nbsp;<a href="http://www.researcherid.com/rid/F-7325-2011" target="externalIdentifier.value">ResearcherID: F-7325-2011</a>;&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=37093695400&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 37093695400</a>
    <br/>
    <br/><strong><a href="mailto:rosandi@geophys.unpad.ac.id">Yudi Rosandi</a></strong>
    <br/>
    <p>
        Universitas Padjadajaran, Indonesia
    </p>
    <a href="https://orcid.org/0000-0003-2387-1338">ORCID</a>,&nbsp;<a href="http://www.researcherid.com/rid/F-8044-2014" target="externalIdentifier.value">ResearcherID: F-8044-2014</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=12781959300&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 12781959300</a>
    <br/>
    <br/><strong><a href="mailto:r.abdulah@unpad.ac.id">Rizky Abdulah</a></strong>
    <br/>
    <p>
        Universitas Padjadajaran, Indonesia
    </p>
    <a href="https://orcid.org/0000-0002-8779-6421">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=9244834900&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 9244834900</a>,&nbsp;<a href="http://www.researcherid.com/rid/A-6282-2015" target="externalIdentifier.value">ResearcherID: A-6282-2015</a>
    <br/>
    <br/><strong><a href="mailto:arief.cahyanto@fkg.unpad.ac.id">Arief Cahyanto</a></strong>
    <br/>
    <p>
        Universitas Padjadajaran, Indonesia
    </p>
    <a href="https://orcid.org/0000-0003-2222-5895">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=55532851800&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 55532851800</a>,&nbsp;<a href="http://www.researcherid.com/rid/L-2410-2016" target="externalIdentifier.value">ResearcherID: L-2410-2016</a>
    <br/>
    <br/><strong><a href="mailto:pramujo@che.itb.ac.id">Pramujo Widiatmoko</a></strong>
    <br/>
    <p>
        Institut Teknologi Bandung, Indonesia
    </p>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=56453551400">Scopus Author ID: 56453551400</a>
    <br/>
    <br/><strong><a href="mailto:sheru@chem-eng.its.ac.id">Heru Setyawan</a></strong>
    <br/>
    <p>
        Institut Teknologi Sepuluh Nopember, Indonesia
    </p>
    <a href="https://orcid.org/0000-0002-2158-6819">ORCID</a>,&nbsp;<a href="http://www.researcherid.com/rid/J-2800-2015" target="externalIdentifier.value">ResearcherID: J-2800-2015</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=6602568058&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 6602568058</a>
    <br/>
    <br/><strong><a href="mailto:widi@chem-eng.its.ac.id">Widiyastuti</a></strong>
    <br/>
    <p>
        Institut Teknologi Sepuluh Nopember, Indonesia
    </p>
    <a href="https://orcid.org/0000-0002-2805-2836">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=16040774700&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 16040774700</a>
    <br/>
    <br/><strong><a href="mailto:dpraseptiangga@staff.uns.ac.id">Hendri Widiyandari</a></strong>
    <br/>
    <p>
        Universitas Sebelas Maret, Indonesia
    </p>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=15836029400">Scopus Author ID: 15836029400</a>
    <br/>
    <br/><strong><a href="mailto:dpraseptiangga@staff.uns.ac.id">Danar Praseptiangga</a></strong>
    <br/>
    <p>
        Universitas Sebelas Maret, Indonesia
    </p>
    <a href="https://orcid.org/0000-0001-6870-9110">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=55195744200&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 55195744200</a>,&nbsp;<a href="http://www.researcherid.com/rid/B-5290-2010" target="externalIdentifier.value">ResearcherID: B-5290-2010</a>
    <br/>
    <br/><strong><a href="mailto:erman_taer@yahoo.com">Erman Taer</a></strong>
    <br/><p>
        Universitas Riau, Indonesia
    </p>
     <a href="https://www.scopus.com/authid/detail.uri?authorId=35346209000">Scopus Author ID: 35346209000</a>
    <br/>
    <br/><strong><a href="mailto:rupiasih@gmail.com">Ni Nyoman Rupiasih</a></strong>
    <br/><p>
        Universitas Udayana, Indonesia
    </p>
    <a href="https://orcid.org/0000-0003-1268-1416">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=24329536300&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 24329536300</a>
    <br/>
    <br/><strong><a href="mailto:sudiana75@yahoo.com">I Nyoman Sudiana</a></strong>
    <br/><p>
        Universitas Halu Oleo, Indonesia
    </p>
    <a href="https://orcid.org/0000-0002-8872-6986">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=42462382600&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 42462382600</a>,&nbsp;<a href="http://www.researcherid.com/rid/S-5941-2016" target="externalIdentifier.value">ResearcherID: S-5941-2016</a>
    <br/>
    <br/><strong><a href="mailto:nbs.bala@gmail.com">Balasubramanian</a></strong>
    <br/><p>
        Anna University, India
    </p>
    <a href="https://orcid.org/0000-0003-0763-8595">ORCID</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=57136420200&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 57136420200</a>
    <br/>
    <br/><strong><a href="mailto:nparmar@wsu.edu">Narendra S Parmar</a></strong>
    <br/><p>
        Korea Institute of Science and Technology, South Korea
    </p>
    <a href="https://orcid.org/0000-0001-5543-1682">ORCID</a>,&nbsp;<a href="https://www.scopus.com/authid/detail.uri?authorId=36193088900">Scopus&nbsp;Author ID: 3619308890</a>
    <br/>
    <br/><strong><a href="mailto:ratna-balgis@hiroshima-u.ac.jp%20">Ratna&nbsp;Balgis</a><br/></strong>
    <p>
        Hiroshima University, Japan
    </p>
    <a href="https://orcid.org/0000-0002-3252-5739">ORCID</a>,&nbsp;<a href="https://www.scopus.com/authid/detail.uri?authorId=35118660300">Scopus Author ID: 35118660300</a>
    <br/><strong><br/><a href="mailto:deorajsinghster@gmail.com">Deo R Singh</a></strong>
    <br/><p>
        Weill Cornell Medical College, USA
    </p>
    <a href="https://orcid.org/0000-0001-9027-1813">ORCID</a>,&nbsp;<a href="http://www.researcherid.com/rid/J-9773-2017" target="externalIdentifier.value">ResearcherID: J-9773-2017</a>,&nbsp;<a href="http://www.scopus.com/inward/authorDetails.url?authorID=36060311000&amp;partnerID=MN8TOARS" target="externalIdentifier.value">Scopus Author ID: 36060311000</a>
    <br/>
    <br/><strong><a href="mailto:w.ciptonugroho@uu.nl">Wirawan Ciptonugroho</a></strong>
    <br/><p>
        Utrecht University,&nbsp;Netherlands&nbsp;
    </p>
    <a href="https://orcid.org/0000-0001-6126-5457">ORCID</a>, &nbsp;<a class="basic-link" href="https://www.scopus.com/authid/detail.uri?authorId=56971565500" target="_blank" rel="noopener noreferrer">Scopus Author ID: 56971565500</a>
        </div>

        <div id="metalair">
          <p>
            Journal of Powder Technology and Advanced Functional Materials is a peer-reviewed, Open Access journal that publishes an international journal of original research articles and review articles in all areas of science and technology research on powder and particulate materials as advanced functional materials.
            <br/><br/>
            All manuscripts are subjected to a vigorous peer review process, to ensure quality and originality. Approval by at least two independent reviewers and the editor is the pre-requisite for acceptance of a manuscript for publication.
            <br/><br/>
            Manuscript can be submitted via <a href="http://ojs.jpfoundation.or.id/index.php/jptafm/login">Online Submission System</a>
          </p>
          <h5>
          Aims:
          </h5>
          <p>
            Journal of Powder Technology and Advanced Functional Materials is an international journal dedicated to publishing high-quality original research articles and review articles in all areas of science and technology research on powder and particulate materials as advanced functional materials.
          </p>
          <h5>
            Scope:
          </h5>
          <p>
          Papers which describe novel theory and its application to practice are welcome, and articles that carefully executed experimental work which is properly interpreted are also welcome. Papers in which knowledge from or applied to other disciplines is integrated with powder technology are especially welcome. There is no limitation is imposed on the size of the particles, which may range from nanometre scale, as in pigments or aerosols to particulate systems. The following list of topics is indicate typical subjects area hich fall within the scope of the journal's interests:
          </p>
          <ul >
            <li>Fundamental theory and modeling of powder dealing with topics scienece of sintering, deformation theory and plasticity, flow and permeability of assemblies of particles, colloids science including the origins and effects of inter particle forces.</li>
            <li>Formation and synthesis of particles by solution, silid and aerosol methods.</li>
            <li>For materials-oriented contributions we are looking for articles revealing the effect of particle/powder characteristics (size, morphology and composition, in that order) on material performance or functionality and, ideally, comparison to any industrial standard.</li>
            <li>Surface enginering of particles: agglomeration, coating, comminution and attrition, and electro-chemical method.</li>
            <li>Characterisation of the size, shape, surface area, pore structure and strength of particles and agglomerates</li>
            <li>Dispersion of particles and rheology.</li>
            <li>Advance application of powder Technology in production of pharmaceuticals (including delivery systems), chemicals, foods, feeds, pigments, structural, and functional materials and in environmental and energy related materials.</li>
            <li>Nanotechnology and nanostructure which report an interactions between particles and their environment, including delivery systems</li>
            <li>Development and applications of powder technology in functional materials, including topics in chemistry, physics, nanotechnology, ceramics, metallurgy, and biomaterials:&nbsp;Topical coverage includes photovoltaics, organic electronics, carbon materials, nanotechnology, liquid crystals, magnetic materials, surfaces and interfaces, and biomaterials.</li>
          </ul>
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
