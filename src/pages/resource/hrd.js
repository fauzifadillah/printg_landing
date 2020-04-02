import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/resource/style1.css'

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
    <div className="resource-pages">
      <div className="resource-pagesGroup">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Li data-aos="fade-right"nk to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_resource-pages">
      <h2>Researchers</h2>
      <div className="CardGroup_resource-pages">
        
        <div id="researchers" className="research">       
          <figure>
            <img id="made2" src={require('../../images/resource/made2.jpg')}/>
            <figcaption className="figcaption">Prof. Dr. Eng. I Made Joni, M.Sc.</figcaption>
          </figure>
          <p data-aos="fade-up-right">
          I Made Joni has over 16 years of experience in nanotechnology processing, and in the last 6 years he engaged with graphite processing industry for enhancing the purity of graphite from its mineral. He focused on research and development, mineral processing, hydrometallurgical separation and mineral recovery systems.
          He obtained his undergraduate degree in Electronic instrumentation, Department of Physics, Padjadjaran University. He received his master’s degree from School of Physical Sciencies, Jawaharlal Nehru University, New Delhi India on Theoretical Physics. After completing his master degree, he pursued his doctorate degree in Chemistry and Chemical Engineering, Hiroshima University on the topic entitled "Nanotechnology Synthesis and Dispersion".
          </p>
          <p data-aos="fade-up-left">He joined Department of Physics, Padjadajaran University in 2001 and actively involved in R&D at instrumentation system and functional material laboratory. His responsibilities included development of equipment and instrument for material processing, synthesis and dispersion of nanomaterials, mineral analysis and testing for feasibility and pre-feasibility studies, operating complete pilot-gravity-flotation, chemical upgrading pilot plants and recovery technologies.</p>
          <p data-aos="fade-up-right">In 2015 he was appointed as a Head of Nanotechnology and Graphene Research Centre (Print-G). In recent years, he devoted his expertise and knowledge in carbon and graphite/graphene-based materials applications, mineral processing and nanotechnology for paints and coating applications. More about his publications <a href="https://scholar.google.com/citations?user=xSGYLDcAAAAJ&hl=en">here</a>.</p>          
        </div>
        
        <div className="research">

          <table >
          <tbody>
          <tr>
          <td ><img src={require('../../images/resource/camellia1.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/profwawan.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/elin1.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span><a href="https://scholar.google.com/citations?user=tQIKexAAAAAJ&amp;hl=en" target="_blank">Prof. Dr. Eng. Camellia Panatarani, M.Si.</a>&nbsp;</span></td>
          <td ><span><a href="https://scholar.google.com/citations?user=zX7rSaAAAAAJ&amp;hl=en" target="_blank">&nbsp;Prof. Dr. Wawan Hermawan. MS</a></span></td>
          <td ><span><a href="https://scholar.google.co.id/citations?user=Xb-6YZoAAAAJ&amp;hl=en" target="_blank">&nbsp;Prof.Dr.Ir.Ellin Harlia.,M.S</a></span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/Hersanti.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/ujangsubhan1.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/herisupratman1.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span ><a href="https://scholar.google.co.id/citations?user=X3ltkmsAAAAJ&amp;hl=en" target="_blank">Prof. Dr. Ir. Hj. Hersanti, MP</a></span></td>
          <td ><span ><a href="https://scholar.google.com/citations?user=aaArHVEAAAAJ&amp;hl=en" target="_blank">&nbsp;Ujang Subhan, S.Pi., M.Si.</a></span></td>
          <td ><span ><a href="https://scholar.google.co.id/citations?user=cH17Ha8AAAAJ&amp;hl=en" target="_blank">Dr. Ir. Rd. Hery Supratman, MS</a> </span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/renny.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/zulia1.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/dr-arief1.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span > <a href="https://scholar.google.co.id/citations?user=pZepq7YAAAAJ&amp;hl=en" target="_blank">drg. Renny Febrida, M.Si.</a></span></td>
          <td ><span > <a href="https://scholar.google.com/citations?user=diljxdEAAAAJ&amp;hl=en" target="_blank">drg. Zulia Hasratiningsih, MD.Sc.</a></span></td>
          <td ><span ><a href="https://scholar.google.com/citations?user=BdIlNKcAAAAJ&amp;hl=en" target="_blank">drg. Arief Cahyanto, M.T., Ph.D.&nbsp;</a></span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/Elin-Karlina-M1.jpg')} alt="" />&nbsp;</td>
          <td ><img src={require('../../images/resource/Ferry.jpg')} /></td>
          <td ><img src={require('../../images/resource/emma.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span >&nbsp;<a href="https://scholar.google.co.id/citations?user=5HhfPX0AAAAJ&amp;hl=en" target="_blank">&nbsp;drg. Elin Karlina, M.Kes.</a></span></td>
          <td ><span ><a href="https://www.scopus.com/authid/detail.uri?authorId=36992049700" target="_blank"><span>&nbsp;Dr. Eng. Ferry Faizal, M.Sc</span></a></span></td>
          <td ><span ><a href="https://scholar.google.com/citations?user=yyUJE0gAAAAJ&amp;hl=en" target="_blank">&nbsp;Dr. Emma Rochima, S. Pi., M. Si</a></span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/Melanie.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/madihah.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/ranimaharani.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span >&nbsp;Melanie , S.Si., M.Si.</span></td>
          <td ><span ><a href="https://scholar.google.co.id/citations?user=kjxNv30AAAAJ&amp;hl=en" target="_blank">&nbsp;Madihah , M.Si.</a></span></td>
          <td ><span > <a href="https://scholar.google.co.id/citations?user=ZQgeIEMAAAAJ&amp;hl=en" target="_blank">Rani Maharani , M.Si., Ph.D.</a></span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/nina1.jpg')} alt="" /></td>
          <td ><img src={require('../../images/resource/muchtaridi1.jpg')} alt="" /></td>
          <td >&nbsp;<img src={require('../../images/resource/dwindra.jpg')} alt="" /></td>
          </tr>
          <tr>
          <td ><span > <a href="https://scholar.google.co.id/citations?user=mGDwKSsAAAAJ&amp;hl=en">Dr. drg. Nina Djustiana, M.Kes.</a></span></td>
          <td ><span><a href="https://scholar.google.co.id/citations?user=o-AUon8AAAAJ&amp;hl=en" target="_blank"><span >Prof.&nbsp;Muchtaridi, M.Si.,Ph.D, Apt.</span></a></span></td>
          <td >&nbsp;<span ><a href="https://www.scopus.com/authid/detail.uri?authorId=55872452600" target="_blank"><span>Dwindra Wilham Maulana, S.Si, M.T.&nbsp;</span></a></span></td>
          </tr>
          <tr>
          <td ><img src={require('../../images/resource/venitakarini1.jpg')} alt="" /></td>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          </tr>
          <tr>
          <td ><span ><a href="https://scholar.google.co.id/citations?user=5HhfPX0AAAAJ&amp;hl=en" target="_blank">&nbsp;</a><a href="https://scholar.google.co.id/citations?user=KBwTa3AAAAAJ&amp;hl=en" target="_blank">drg. Veni Takarini, M.Kes.&nbsp;</a></span></td>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          </tr>
          <tr>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          </tr>
          <tr>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          <td >&nbsp;</td>
          </tr>
          </tbody>
          </table>

        </div>

        <h2  >Students</h2>
        <div className="research">       
          <h5 id="students-s1">Program S1</h5>
          <h6>2016</h6>
          <table >
            <tbody>
            <tr>
            <td >Zahra Inatsa Hauna</td>
            <td >Mia Nur Aida</td>
            <td >Nuzulul Hafizoh Az</td>
            </tr>
            <tr>
            <td >Sundoro Yoga</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            </tr>
            </tbody>
          </table> 

          <h6>2017</h6> 
          <table >
            <tbody>
            <tr>
            <td >Ilham Dhiaputra</td>
            <td >Maulana Hafid&nbsp;</td>
            <td >Febrian Afandi&nbsp;</td>
            </tr>
            <tr>
            <td >Muhammad Wahyudin</td>
            <td >Thalita Nadya</td>
            <td >Ilham Zhanif M Erni Yulianti</td>
            </tr>
            <tr>
            <td >Adika Pambudi</td>
            <td >Novianti Rizky</td>
            <td >Lisa Putri Kusuma</td>
            </tr>
            <tr>
            <td >Heraldo Yanindra Pratama</td>
            <td >Erlan Saputra</td>
            <td >Maulana Yunus</td>
            </tr>
            <tr>
            <td >Siti Hidayatul Hikma</td>
            <td >Muhammad Fakhri Mulhadi</td>
            <td >Numan Luthfi</td>
            </tr>
            <tr>
            <td >Dina Lestari</td>
            <td >Fitria Yunita Sari</td>
            <td >Rosi Lusiana</td>
            </tr>
            <tr>
            <td >Dea Audia Nurfajri</td>
            <td >Putri Nursabat Kastella</td>
            <td >Nurhasanah</td>
            </tr>
            <tr>
            <td >Yanah Mardiana</td>
            <td >Apriliana Eka Saputri</td>
            <td >Umi Latifah</td>
            </tr>
            <tr>
            <td >Ignes Nathania</td>
            <td >Afifah Iswara Aji</td>
            <td >Erma Febriani</td>
            </tr>
            <tr>
            <td >Assifa Rahma Khoirunnisa</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            </tr>
            </tbody>
          </table>   

          <h6>2018</h6>
          <table >
            <tbody>
            <tr>
            <td>Mardallia Sekar Wangi</td>
            <td>Devi Fitria</td>
            <td>Mochamad Fadil T</td>
            </tr>
            <tr>
            <td>Wahnidar Daulay</td>
            <td>Destiana Purnama</td>
            <td>Prio Dwiatmoko</td>
            </tr>
            <tr>
            <td>Sheila Arista</td>
            <td>Ifan M Zaenudin</td>
            <td>Wahyudin Pratama</td>
            </tr>
            <tr>
            <td>Selma Alamanda</td>
            <td>Wildan Nurfurqan</td>
            <td>Livia Hanarti</td>
            </tr>
            <tr>
            <td>Ainun Mardiah</td>
            <td>Firda Mohammad</td>
            <td>Disa Nirmala</td>
            </tr>
            <tr>
            <td>Ayunani Agustina</td>
            <td>Amalia F. Rachmadiani</td>
            <td>Annisa Putri Septiani</td>
            </tr>
            <tr>
            <td>Mila Sri Hardiati</td>
            <td>Alfie Habibie Yasin Mubarok</td>
            <td>Muhammad Ridha</td>
            </tr>
            <tr>
            <td>Aril Pranata</td>
            <td>Nuha Mufida</td>
            <td>Hayunda Lail Zahara</td>
            </tr>
            <tr>
            <td>Irfa Nursyabani</td>
            <td>Reita Putri</td>
            <td>&nbsp;</td>
            </tr>
            </tbody>
          </table> 
          <div className="double_fig">
          <div>
          <h5 id="students-s2">Program S2</h5>
          <h6>2019</h6>
          <p>Sundoro Yoga, S.Pi</p>
          <p>Fenfen Fenda Florena, S.Si</p>
          <p>drg. Yanuar</p>
          </div>

          <div>
          <h5 id="students-s3">Program S3</h5>
          <h6>2020</h6>
          <p>drg. Renny Febrida, M.Si.</p>
          <p>Ujang Subhan, S.Pi., M.Si.</p>
          <p>Melanie , S.Si., M.Si.</p>
          </div>

          </div>
        </div>
        
        
        <div className="research">  
        <h2 id="facilities">Facilities</h2>
        <h3>Measurement and Processing Facilities</h3>
        <h5 id="spectro">Spectroscopy and measurement system</h5> 
        <div className="double_fig">    
          <figure>
            <img id="LS55" src={require('../../images/resource/LS55.png')}/>
            <figcaption className="figcaption">Luminescence and Fluorescence spectroscopy</figcaption>
          </figure>
          <figure>
            <img id="batre" src={require('../../images/resource/batre.jpg')}/>
            <figcaption className="figcaption">Impendence meter and Cyclic voltammeter for electrochemistry measurement of cells and others</figcaption>
          </figure>
        </div>  
          
          <li data-aos="fade-right">High precision weight measurement ( 4 digit)</li>
          <li data-aos="fade-right">Long Distance IR temperature measurement</li>
          <li data-aos="fade-right">RPM meter</li>
          <li data-aos="fade-right">Humidity meter, temperature and PH meter</li>
          <li data-aos="fade-right">Flow meter and Mass flow controller</li>
          <li data-aos="fade-right">Zeta potential (homemade)</li>
          <li data-aos="fade-right"> Fuel cell </li>
          <li data-aos="fade-right">Sieve Shaker (Vibro Separator & Filter)</li>
          
          <h5 id="proc-facilities">Processing Facilities</h5>

          <li data-aos="fade-right">Laboratory and pilot scale flotation system (mineral separation process)</li>
          <li data-aos="fade-right">Pulse combustion spray pyrolysis Reactor (fine and nanopowder synthesis)</li>
          <li data-aos="fade-right">Spray pyrolysis reactor (fine and nanopowder synthesis)</li>
          <li data-aos="fade-right">Plasma reactor: Microwave Asisted CVD (nanopowder, carbon fiber, and graphene synthesis)</li>
          <li data-aos="fade-right">Vacum CVD CVD (nanopowder, carbon fiber, and graphene synthesis)</li>
          <li data-aos="fade-right">Plasma Torch CVD (nanopowder, carbon fiber, and graphene synthesis)</li>
          <li data-aos="fade-right">Lab. Scale Beads Mill System and Industrial Scale ( dispersion of nano malterials)</li>
          <li data-aos="fade-right">High temperature furnace  ( solgel synthesis of oxide nano malterials)</li>
          <li data-aos="fade-right">Vacuum Furnace ( Nanomaterials and surface engineering)</li>
          <li data-aos="fade-right">Electrostatic separator for Nanoparticles collector</li>
          <li data-aos="fade-right">Pulverizer for size reduction of powder</li>
          <li data-aos="fade-right">Hammer mill for size reduction of powder</li>
          <li data-aos="fade-right">Dry Storage large size</li>
          <li data-aos="fade-right">Press Equipment (80 Ton)</li>
          <li data-aos="fade-right">Maple furnace</li>
          <li data-aos="fade-right">Bubble generator for mineral separation and water treatment plant</li>
          <li data-aos="fade-right">Aerosol generator for nanomaterial processing</li>
          <li data-aos="fade-right">Distillation equipment at laboratory scale</li>

          <h5 id="support">Suporting facilities at UNPAD Central Laboratory <br/>Laboratory for Herbal Analysis,Elucidation and Evaluation</h5>

          <li data-aos="fade-right">Spectrophotometer Fluorescence</li>
          <li data-aos="fade-right">High Performance Liquid Chromatography (preparative)</li>
          <li data-aos="fade-right">Ultra Performance Liquid Chromatography (UPLC)</li>
          <li data-aos="fade-right">Animal Imaging</li>
          <li data-aos="fade-right">Spectrophotometer UV-VIS multimode</li>

          <h5>Laboratory For Evaluation and Extract Standardization</h5>

          <li data-aos="fade-right">Particle Size Analizer</li>
          <li data-aos="fade-right">Climatic Chamber</li>

          <h5>Laboratory for Antibacterial and Antioxidant Tests</h5>

          <li data-aos="fade-right">Micropipette vol. 500-5000 µL, 100-1000 µL,. 20-200 µL, 10-100 µL, 2-20 µL</li>
          <li data-aos="fade-right">Microipette, multi-channel</li>
          <li data-aos="fade-right">Autoclave</li>
          <li data-aos="fade-right">Laminar Air Flow</li>
          <li data-aos="fade-right">Refrigerator</li>
          <li data-aos="fade-right">Medical Freezer</li>
          <li data-aos="fade-right">Biophotometer</li>
          <li data-aos="fade-right">Vortex Mixer</li>
          <li data-aos="fade-right">PCR Gradient</li>
          <li data-aos="fade-right">Refrigerator Microcentrifuge</li>
          <li data-aos="fade-right">CO2 Incubator</li>
          <li data-aos="fade-right">Vacuum consentrator</li>
          <li data-aos="fade-right">Horizontal Electrophoresis</li>
          <li data-aos="fade-right">Vertical Electrophoresis</li>
          <li data-aos="fade-right">Power Supply for Electrophoresis</li>
          <li data-aos="fade-right">Hot plate and stirrer</li>
          <li data-aos="fade-right">Microcentrifuge</li>
          <li data-aos="fade-right">Incubator</li>
          <li data-aos="fade-right">Double Cone Blenders</li>
          <li data-aos="fade-right">Tablet Production Machine</li>
          <li data-aos="fade-right">Super Mixer</li>
          <li data-aos="fade-right">Oscillating Granulator Machine for Wet and Dry</li>
          <li data-aos="fade-right">Coating Tablet Machine</li>
          <li data-aos="fade-right">Fluid Bed Spray Granulator Multifunction</li>
          <li data-aos="fade-right">Rotary Tablet Press Machine</li>
          <li data-aos="fade-right">Tablet Deduster</li>

          <h5>Extract Production Machine</h5>

          <li data-aos="fade-right">Balance cap.10Kg</li>
          <li data-aos="fade-right">Balance cap.100Kg</li>
          <li data-aos="fade-right">Extraction and Concentration Machine</li>
          <li data-aos="fade-right">Liquid Vibro-Sieve Separator & Filter</li>
          <li data-aos="fade-right">Multifunctionl Alcohol Recycling Concentrator</li>
          <li data-aos="fade-right">Spray Dryer</li>
          <li data-aos="fade-right">Grinding/Crushing Machine</li>
          <li data-aos="fade-right">Sieve Shaker (Vibro Separator & Filter)</li>
          <li data-aos="fade-right">Container 200L, 100L, 50L</li>

          <h5>Support Machine</h5>

          <li data-aos="fade-right">Automatic Purifying Water Equipment</li>
          <li data-aos="fade-right">Compressor</li>
          <li data-aos="fade-right">Vacuum Cleaner</li>
          <li data-aos="fade-right">Distillation Set</li>

          <h5>In-Processed Control (IPC)</h5>
          <li data-aos="fade-right">Powder and Granulate Tester</li>
          <li data-aos="fade-right">Tapped Density Testers</li>
          <li data-aos="fade-right">Friability & Abrassion Testers</li>
          <li data-aos="fade-right">Tablet Hardness Testers</li>
          <li data-aos="fade-right">Disintegration Testing</li>
          <li data-aos="fade-right">pH Meter</li>

          <h5>Product Development (Prodev)</h5>
          <li data-aos="fade-right">Motor for all Purpose Equipment</li>
          <li data-aos="fade-right">Universal Gear</li>
          <li data-aos="fade-right">Three-Roller Mill</li>
          <li data-aos="fade-right">Homogenizer</li>
          <li data-aos="fade-right">Laboratory Kneader</li>
          <li data-aos="fade-right">Double Cone Mixer</li>
          <li data-aos="fade-right">Dry Granulator</li>
          <li data-aos="fade-right">Wet Granulator</li>
          <li data-aos="fade-right">High Speed Mixer</li>
          <li data-aos="fade-right">Coating Pan</li>
          <li data-aos="fade-right">Polishing Drum</li>
          <li data-aos="fade-right">Sieve Sets</li>

          <h5>Synthesis Laboratory</h5>
          <li data-aos="fade-right">Preparative Chromatography</li>
          <li data-aos="fade-right">Rotary Evaporation</li>
          <li data-aos="fade-right">Melting Point</li>
          <li data-aos="fade-right">Reaction Tube</li>
          <li data-aos="fade-right">Round Bottom single Neck Flask</li>
          <li data-aos="fade-right">Vacuum Manifold System</li>
          <li data-aos="fade-right">Oil Vacuum Pump</li>
          <li data-aos="fade-right">Digital Vacuum Gauge</li>
          <li data-aos="fade-right">Fluorinated Grease</li>
          <li data-aos="fade-right">Bubbler for Mineral Oil</li>
          <li data-aos="fade-right">Flexible Rubber Tubing</li>
          <li data-aos="fade-right">Flexible Silicon Tubing</li>
          <li data-aos="fade-right">Dewar Flask</li>
          <li data-aos="fade-right">Loose Lied Insulating Plugs</li>
          <li data-aos="fade-right">Solvent Bottle</li>
          <li data-aos="fade-right">Beaker Glass</li>
          <li data-aos="fade-right">Heavy Duty Beaker Glass</li>
          <li data-aos="fade-right">Chromatography Columns</li>
          <li data-aos="fade-right">Adapter</li>
          <li data-aos="fade-right">Preparative TLC Chamber Cylindrical Glass Chamber</li>
          <li data-aos="fade-right">Sprayer</li>
          <li data-aos="fade-right">Clamp</li>
          <li data-aos="fade-right">Clamp Holder</li>
          <li data-aos="fade-right">Support Base</li>
          <li data-aos="fade-right">Support Jack</li>
          <li data-aos="fade-right">Cylinder</li>
          <li data-aos="fade-right">Desiccator</li>
          <li data-aos="fade-right">Round Bottom Flask</li>
          <li data-aos="fade-right">Round Bottom Three Neck Flask</li>
          <li data-aos="fade-right">Round Bottom Two Neck Flask</li>
          <li data-aos="fade-right">Round Bottom Single Short Neck Flask</li>
          <li data-aos="fade-right">Long Neck Culture Flask</li>
          <li data-aos="fade-right">Dewar Flask Low Form</li>
          <li data-aos="fade-right">Thermometer</li>
          <li data-aos="fade-right">Hot plate and stirrer</li>
          <li data-aos="fade-right">Automatic Melting Point</li>
          <li data-aos="fade-right">Thermometer, mineral spirit filled</li>
          <li data-aos="fade-right">Filter Adapter Neoprene</li>
          <li data-aos="fade-right">Oil Bath</li>
          <li data-aos="fade-right">Oven</li>
          <li data-aos="fade-right">Crystallization Synthesis System</li>
          <li data-aos="fade-right">Refrigerator</li>
          <li data-aos="fade-right">Stir Bar Kit</li>
            <ul data-aos="fade-left">a. Standard stir bar</ul>
            <ul data-aos="fade-left">b. Micro stir bar</ul>
            <ul data-aos="fade-left">c. Egg-shaped stir bar; include 4 standard size</ul>
            <ul data-aos="fade-left">d. Retriever stir bar (Polyethylene)</ul>
          <li data-aos="fade-right">Mini Chiller</li>
          <li data-aos="fade-right">Spatula</li>
            <ul data-aos="fade-left">a. Standard Spatula</ul>
            <ul data-aos="fade-left">b. Heavy duty spatula</ul>
            <ul data-aos="fade-left">c. Spoon and spatula</ul>
            <ul data-aos="fade-left">d. Semi-micro spatula</ul>
            <ul data-aos="fade-left">e. Tappered-micro spatula</ul>
          <li data-aos="fade-right">Septum Stopper</li>
          <li data-aos="fade-right">Needle Gauge</li>
          <li data-aos="fade-right">Test Tube</li>
          <li data-aos="fade-right">Vial + Screw Cap</li>
          <li data-aos="fade-right">Ultrasonic Bath</li>
          <li data-aos="fade-right">Pipette Bulb</li>
          <li data-aos="fade-right">Pipette Pasteur</li>
          <li data-aos="fade-right">Reflux Condenser</li>
          <li data-aos="fade-right">Storage Dewars for Liquid Nitrogen</li>
          <li data-aos="fade-right">Googles</li>
          <li data-aos="fade-right">Gloves</li>
          <li data-aos="fade-right">Rotary Tube Mixer with Disc</li>
          <li data-aos="fade-right">Freeze Dryer</li>
          <li data-aos="fade-right">Air Compressors</li>
          <li data-aos="fade-right">Portable Balance</li>
          <li data-aos="fade-right">Analytical Balances</li>
          <li data-aos="fade-right">Waterbath</li>
          <li data-aos="fade-right">Heating Mantles</li>
          <li data-aos="fade-right">Lab Frame Sets</li>
          <li data-aos="fade-right">Pippette Adjustable</li>
          <li data-aos="fade-right">Wash Bottle</li>
          <li data-aos="fade-right">Stand,Clamp and Boss Head</li>
          <li data-aos="fade-right">Ring Clamp</li>
          <li data-aos="fade-right">Separating Funnel</li>
          <li data-aos="fade-right">Conical Flask</li>
          <li data-aos="fade-right">Beaker Glass General</li>
          <li data-aos="fade-right">Glass Funnel</li>
          <li data-aos="fade-right">Buchner Funnel</li>
          <li data-aos="fade-right">Buchner Flask</li>
          <li data-aos="fade-right">Hirsh Funnel</li>
          <li data-aos="fade-right">Measuring Cylinder</li>
          <li data-aos="fade-right">Round Bottom Flask General</li>
          <li data-aos="fade-right">Condenser</li>
          <li data-aos="fade-right">Stoppers</li>
          <li data-aos="fade-right">Stillhead</li>
          <li data-aos="fade-right">Receiver Adapter</li>
          <li data-aos="fade-right">Screwcap Adapter</li>
          <li data-aos="fade-right">Dropping Funnel</li>
          <li data-aos="fade-right">Adapter General</li>
          <li data-aos="fade-right">Drying Tubes</li>
          <li data-aos="fade-right">Water Tubing</li>
          <li data-aos="fade-right">Vacuum Tubing</li>
          <li data-aos="fade-right">Mortar and Pestle</li>
          <li data-aos="fade-right">Tongs</li>
          <li data-aos="fade-right">Evaporating Dish</li>
          <li data-aos="fade-right">Weighing Bottle</li>

          <h2 id="partners" >Partners</h2>

          <h5 id="internal-collabs">Internal Collaborators</h5>
          <li data-aos="fade-right"><a href="http://ftgeologi.unpad.ac.id/laboratorium/">Lab. Sistem Instrumentasi dan Pemrosesan Material Fungsional, Departemen Fisika, FMIPA, Universitas Padjadjaran</a></li>
          <li data-aos="fade-right"><a href="http://espelab.fmipa.unpad.ac.id/">Lab. Petrografi, Fakultas Teknik Geologi, Universitas Padjadjaran</a></li>
          <li data-aos="fade-right"><a href="http://fkg.unpad.ac.id/">Faculty of Dentistry. Universitas Padjadjaran</a></li>
          <li data-aos="fade-right"><a href="http://www.unpad.ac.id/fakultas/matematika-ipa/biologi/">Departemen of Biology, Faculty of Mathematics and Natural Science</a></li>
          <li data-aos="fade-right"><a href="http://farmasi.unpad.ac.id/">Faculty of Pharmacy</a></li>
          <li data-aos="fade-right"><a href="http://peternakan.unpad.ac.id/">Faculty of Husbandry</a></li>
          <li data-aos="fade-right"><a href="http://www.faperta.unpad.ac.id/">Faculty of Agriculture</a></li>
          <li data-aos="fade-right"><a href="http://www.fk.unpad.ac.id/">Faculty of Medical</a></li>

          <h5 id="univ-assoc">Universities and Associations</h5>
          <li data-aos="fade-right"><a>Asosiasi Powder Indonesia (ASPOWIN)</a></li>
          <li data-aos="fade-right"><a>Japan Powder Association</a></li>
          <li data-aos="fade-right"><a>Indonesia Graphite Carbon Asociation</a></li>
          <li data-aos="fade-right"><a>Lab. Korosi, Teknik Kimia, Institut Teknologi Sepuluh Nopember</a></li>
          <li data-aos="fade-right"><a>Tokyo University of Agriculture and Technology (TUAT )</a></li>
          <li data-aos="fade-right"><a>Department of Chemical Engineering, Anna University, India.</a></li>

          <h5 id="industries">Industries</h5>
          <li data-aos="fade-right"><a href="http://iwpaint.com/">PT. Indowira Putra Paint</a></li>
          <li data-aos="fade-right"><a href="https://www.prakindo.com">Prakindo Group</a></li>
          <li data-aos="fade-right"><a href="xxx">WONJIN Autoparts India Pvt Ltd</a></li>
          <li data-aos="fade-right"><a href="https://www.ashizawa.com/english/">Ashizawa Finetech Ltd.</a></li>
          <li data-aos="fade-right"><a href="http://www.ohkawara-dryers.com/">Ohkawara Kakohki Co., Ltd.</a></li>
          <li data-aos="fade-right"><a href="https://www.kajiwara.co.jp/">Kajiwara Inc.</a></li>
          <li data-aos="fade-right"><a href="http://www.kett.co.jp/">Kett Electric Laboratory</a></li>
          <li data-aos="fade-right"><a href="http://www.betterseishin.co.jp/english/">SEISHIN ENTERPRISE CO., LTD.</a></li>
          <li data-aos="fade-right"><a href="https://www.aaamachine.com/partner/tsutsui/">Tsutsui Scientific Instrument Co., Ltd.</a></li>
          <li data-aos="fade-right"><a href="http://www.toyohi.co.jp/english/">TOYO HITEC Co.,LTD.</a></li>
          <li data-aos="fade-right"><a href="https://www.tokujuk.co.jp/english/">TOKUJU CORPORATION</a></li>
          <li data-aos="fade-right"><a href="http://www.eriez.com/">ERIEZ MAGNETICS JAPAN CO., LTD.</a></li>
          <li data-aos="fade-right"><a href="https://hakaru.jp">HAKARU PLUS CORPORATION</a></li>
          <li data-aos="fade-right"><a href="http://www.mkn.co.jp/index.html">MAKINO MFG. CO., LTD.</a></li>
          <li data-aos="fade-right"><a href="http://www.matsushima-m-tech.com/english/">Matsushima Measure Tech Co., Ltd.</a></li>
          <li data-aos="fade-right"><a href="http://www.matsubo.co.jp/english/">Matsubo Corporation</a></li>
          
          
        </div>
      </div>
    </div>
    
    
  </div>
  </Layout>
)

export default IndexPage
