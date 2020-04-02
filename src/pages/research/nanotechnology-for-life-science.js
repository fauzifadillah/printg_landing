import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/research/style3.css'

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
    <div className="Research_3">
      <div className="Research_3Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_research_3">
      <h2>Nanotechnology for Life Science</h2>
      <div className="CardGroup_research_3">
        <div className="research">
          <h3 className="underline" >Agriculture</h3>
          <h3>Pest Control: NPV Nano Formulation & Biopesticide</h3>          
          
          <p>
            <h5>·    Nano Formulation for Helicoverpa armigera Nuclear Polyhedrosis Virus (HaNPV).</h5>            
            <h5>·    Formulation of bioactive compound for pest control</h5>                 
          </p>
          
          <figure>
          <img id="Figure201_1" src={require('../../images/research/Figure201_1.jpg')}/>
          <figcaption className="figcaption">Pest Control</figcaption>
          </figure>
        </div>
        <div id="imjcp" className="research">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Prof. Dr. Wawan Hermawan, MS. <br/>
            Prof. Dr, Camellia Panatarani <br/>
            Prof. Dr. Eng. I Made Joni <br/>
            Assc. Prof. Dr. Trimayanti, M.Si. <br/>
            Dr. Dra, Desak Made Malini, M.Si. <br/>
            Dr. Mia Miranti Rustama, MP. <br/>
            Dr. Rani Maharani, M.Si. <br/>
            Melani, M.Si. <br/>
            Madihah, M.Si. <br/>
            Dr. Agus Susanto, M.Si. <br/>
            Drs. Hikmat Kasmara, M.Si. <br/>
          <a href="mailto:wawan.hermawan@unpad.ac.id">
          E-Mail: wawan.hermawan@unpad.ac.id.
          </a>
          </h5>
          
        </div>

        <div className="research">
          <h3 className="underline" >Pest Control: Plant Growth Promoting Rhizobacteria (PGPR)</h3>          
          <figure>
            <img id="nano_formulation_of_pgr" src={require('../../images/research/nano_formulation_of_pgr.jpg')}/>
            <figcaption className="figcaption">Nano Formulation of PGPR</figcaption>
          </figure>
          <figure>
            <img id="Biopesticides_and_Nanotechnology_Implementation" src={require('../../images/research/Biopesticides_and_Nanotechnology_Implementation.jpg')}/>
            <figcaption className="figcaption">Biopesticides and Nanotechnology Implementation</figcaption>
          </figure>
          <figure>
            <img id="carbon_fiber_product" src={require('../../images/research/carbon_fiber_product.png')}/>
            <figcaption className="figcaption">Carbon Fiber Product</figcaption>
          </figure>
          <h3 className="underline" >Nano Fertilizer</h3>
          <p>Graphite Tail and Nano Additives Fertilizer <br/> Tail is a by product of the graphite processing that can be utilized as a fertilizer and also addition of nano additives also could enhance their performances.</p>            
          <figure>
            <img id="nano_fertilizer" src={require('../../images/research/nano_fertilizer.png')}/>
            <figcaption className="figcaption">Nano Fertilizer</figcaption>
          </figure>
        </div>
        <div id="fertilizer">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Assc. Prof. Dr. Ir. Reginawanti, MP.Dr, <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
            Prof. Dr. Eng. Camellia Panatarani, M.Si <br/>            
          <a href="mailto:imadejoni@phys.unpad.ac.id ">
          E-Mail: imadejoni@phys.unpad.ac.id 
          </a>
          </h5>
        </div>

        <div className="research">
          <h3 className="underline" >Organic Fertilizer: Nano Processing of Liquid Dung of Cow and Cattle</h3>          
          <figure>
            <img id="Figure5" src={require('../../images/research/Figure5.jpg')}/>
            <figcaption className="figcaption">Organic Fertilizer</figcaption>
          </figure>
        </div>

        <div className="research">
          <h3 className="underline" >Nano Dental Biomaterials</h3>          
          <h3 className="underline" >Calcium Carbonate Nanoparticles; Potential in Bone and Tooth</h3>          
          <figure>
            <img id="Figure_9" src={require('../../images/research/Figure_9.png')}/>
            <figcaption className="figcaption">Calcium Carbonate Nanoparticles</figcaption>
          </figure>
          <p>
          Rationalizing  has  become  a  new  trend  in  the  world  of  science  and  technology. Nanotechnology  has  ascended  to  become  one  of  the  most favorable  technologies, and  one which  will  change  the  application  of  materials  in  different  fields.  The  quality  of  dental biomaterials  has  been  improved  by  the  emergence  of  nanotechnology.  This  technology manufactures  materials  with  much  better  properties  or  by  improving  the  properties  of existing  materials.  The  science  of  nanotechnology  has  become  the  most  popular  area  of research,  currently  covering  a  broad  range  of  applications  in  dentistry.  The basic concept of nanomaterials related to the nanomaterials and applications in restorative dentistry becomes an important issues. Advances in nanotechnologies are paving the future of dentistry,  and  there  are  a  plenty  of  hopes  placed on  nanomaterial  in  terms  of  improving the health care of dental patients.
          </p>
          <h5>
          Silica-Alumina -Zirconium Composite based dental material
          </h5>
          <p>
          Silica-Alumina -Zirconium Composite based dental material synthesis by using geopolymerization of as-received mineral or by using sol-gel on the respective precursor. The challenges in the synthesis are controlling the size, morphology and crystalinity of the nanomaterial. In addition, the most important is the engineering of the surface functional site of the nanomaterial.
          </p>
          <h5>
          Calcium Carbonate (CaCO3 nanoparticles based dental material)
          </h5>
          <p>
          Inorganic nanoparticles for biomedical applications have undergone extensive investigations in recent years. Among different inorganic drug carriers, calcium carbonate (CaCO3) nanoparticles show unique advantages due to their ideal biocompatibility and the potential as delivery system for loading different categories of drugs. The accessibility, low cost, safety, biocompability, pH-sensitive properties, osteoconductivity and slow biodegradability of CaCO3 particles nominate it to be a suitable drug delivery carrier.  Due to slow degradation of CaCO3 matrices, these nanoparticles can be used as sustained release systems to retain cargo for longer times after administration.  The osteoconductivity and bioresorbability may offer these nanoparticles as proper candidate for dual application as bone substitution and drug release in the bone related disease such as osteomyelitis.   Filling bone defects, treatment of early dental caries lesions and generating neoformed bone tissue using by different types of nanoparticulate calcium carbonate has also shown notable applications.  CaCO3 nanoparticles shows a potential dual application as bone substitution and drug carrier in the bone related disease/defects.
          </p>
        </div>
        <div id="calcium_carbonate">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Dr. drg. Nina Djustiana, M.Kes. <br/>
            drg. Zulia Hastratiningsih, MD.Sc. <br/>
            drg. Elin Karlina, M.Kes. <br/>
            drg. Renny Febrida, M.Si. <br/>
            drg. Arief Cahyanto, MT, Ph.D. <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
            Prof. Dr. Eng. Camellia Panatarani, M.Si. <br/>          
          <a href="mailto:imadejoni@phys.unpad.ac.id ">
          E-Mail: imadejoni@phys.unpad.ac.id 
          </a>
          </h5>
        </div>

        <div className="research">
          <h3 className="underline" >Nano Material For Food and Non Food (Feed) Science and Technology</h3>          
          <h3 className="underline" >Nano Chitosan Food Science and Technology</h3>          
          <figure>
            <img id="Figure_11" src={require('../../images/research/Figure_11.png')}/>
            <figcaption className="figcaption">Encapsulation and immobilization technology is important for the food processing and bioengineering industries.</figcaption>
          </figure>
          <h5>
          Nano Chitosan.
          </h5>
          <p>
          Encapsulation and immobilization technology is important for the food processing and bioengineering industries. Chitosan is a natural polysaccharide prepared by the N-deacetylation of chitin. It has been widely used in food and bioengineering industries, including the encapsulation of active food ingredients, in enzyme immobilization, and as a carrier for controlled drug delivery, due to its significant biological and chemical properties such as biodegradability, biocompatibility, bioactivity, and polycationicity. In this work, chitosan nanoparticles and nanofibers used to encapsulate bioactive substances and immobilize enzymes were reviewed. Preparation of chitosan nanoparticles and nanofibers, including the work achieved in our group on chitosan nanoparticles for enzyme immobilization, were also introduced. Some problems encountered with nano-structured chitosan carriers for bioactive substance encapsulation and enzyme immobilization were discussed, together with the future prospects of such systems.
          <br/>Food packaging technology is continuously evolving in response to growing challenges from a modern society. Active packaging is an innovative approach to enhance the shelf life of food stuffs while improving their quality, safety and integrity. Chitosan is the deacetylated derivative of chitin, which is the second most abundant polysaccharide found in nature after cellulose. Chitosan is nontoxic, biocompatible, and biodegradable and thus is considered as an environmentally friendly packaging material. Moreover, chitosan is a good inhibitor against the growth of a wide variety of yeasts, fungi and bacteria, and also displays gas and aroma barrier properties in dry conditions. Along with these characteristics, its ease for film formation, make chitosan an interesting choice for active antimicrobial food packaging applications. This study aims to present investigation regarding chitin and chitosan biopolymers, their properties and the ability to be used in applications in food packaging industry.
          </p>
        </div>
        <div id="chitosan">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Dr. Emma Rochima, MSi. <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
            Prof. Dr. Eng. Camellia Panatarani, M.Si. <br/>    
            <a href="mailto:imadejoni@phys.unpad.ac.id ">
            E-Mail: imadejoni@phys.unpad.ac.id 
          </a>
          </h5>
        </div>
        <div className="research">
          <h3>
          Nano Material for Non-Food (Feed)
          </h3>
          <p>
          Use of probiotics and prebiotics in animal feeds has been shown to benefit digestion, animal performance and the immune system. The microbe population of the rumen must be healthy and in appropriate numbers/balance for proper digestion of feed, and health of the animal. Probiotics are products that contain living microorganisms—bacteria and/or yeasts. Prebiotics are non-digestible sugars that play a beneficial role in aiding “good” microbes and protecting against the “bad” ones.  
          <br/><h5>Challenges:</h5><br/>
          Probiotics/prebiotics have the ability to modulate the balance and activities of the gastrointestinal (GI) microbiota, and are, thus, considered beneficial to the host animal and have been used as functional foods. Numerous factors, such as dietary and management constraints, have been shown to markedly affect the structure and activities of gut microbial communities in livestock animals. Previous studies reported the potential of probiotics and prebiotics in animal nutrition; however, their efficacies often vary and are inconsistent, possibly, in part, because the dynamics of the GI community have not been taken into consideration. Under stressed conditions, direct-fed microbials may be used to reduce the risk or severity of scours caused by disruption of the normal intestinal environment. The observable benefits of prebiotics may also be minimal in generally healthy calves, in which the microbial community is relatively stable. However, probiotic yeast strains have been administered with the aim of improving rumen fermentation efficiency by modulating microbial fermentation pathways.
          </p>
        </div>
        <div id="nano_material_for_non_food">
          <h3 className="underline" >Researchers</h3>          
          <h5>
            Assc. Prof. Dr. Ir. Yuli Astuti Hidayati, M.P. <br/>
            Assc. Prof. Dr. Ir. Tb Benito Achmad Kurnani, D.Est. <br/>
            Prof. Dr. Eng. I Made Joni, M.Sc. <br/>
            Prof. Dr. Eng. Camellia Panatarani, M.Si. <br/>
            <a href="mailto:imadejoni@phys.unpad.ac.id ">
            E-Mail: imadejoni@phys.unpad.ac.id 
          </a>
          </h5>
        </div>
        <div className="research">
          <h5>
          Fine Bubble Generator
          </h5>
          <p>
            Fine bubble Generator is a tools that can produce very small bubbles to dissolved with water for water treatment, waste and aeration, etc.
          </p>
          <figure>
            <img id="bubble" src={require('../../images/research/bubble.jpg')}/>
            <figcaption className="figcaption">Fine Bubble Generator</figcaption>
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
