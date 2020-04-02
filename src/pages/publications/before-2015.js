import React from "react"
import { Link } from "gatsby"
import Layout from '../../components/layout'

import Header from '../../components/header'
import Card from "../../components/Card"
import styled from "styled-components"
import '../../components/css_pages/publications/style1.css'

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
    <div className="pub_1">
      <div className="pub_1Group">
      {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
        <h1>Nanotechnology and Graphene </h1>
        <h1>Research Centre</h1>
        <p> Transforming nanotechnology to solve real world problems</p>
        {/* <Link to="/page-2">Watch the vid!</Link> */}
        
       {/* <Wave/> */}
      </div>
    </div>
    
    <div className="Cards_pub_1">
      <h2 id="invited">Invited Keynotes / Speakers</h2>
      <div className="CardGroup_pub_1">
      <div  data-aos="fade-right" className="pub_class">
            <h3>Jurnal Internasional 2016</h3>
            <h3 data-aos="fade-right" > &lt;2005</h3>
            <ol >
            <li><a href="https://link.springer.com/article/10.1023/A:1024486519731">Panatarani, I. W. Lenggoro and K. Okuyama, Synthesis of single crystalline ZnO nanoparticles by salt-assisted spray pyrolysis(Journal), Journal of Nanoparticle Research 5 (2003) 47-53</a></li>
            <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0022369704001775">Panatarani, I. W. Lenggoro and K. Okuyama, The crystallinity and the photoluminescent properties of spray pyrolyzed ZnO phosphor containing Eu2+ and Eu3+ ions, Journal of Physics and Chemistry of Solids 65 (2004) 1843-1847. (Top 25 Hottest Articles on Science Direct, 2004-2005).</a></li>
            <li>Lenggoro, C. Panatarani and K. Okuyama, One step synthesis and photoluminescence of doped strontium titanate particles with controlled morphology, Materials Science and Engineering B 113 (2004) 60-66.</li>
            <li>Abdullah, C. Panatarani, T. O. Kim and K. Okuyama, Nanostructures ZnO/Y2O3:Eu for use as fillers in luminescent polymer electrolyte composites, Journal of Alloys and Compounds 377 (2004) 298-305.</li>
            <li>Panatarani, I. W. Lenggoro and K. Okuyama, Synthesis of ZnO nanoparticles and luminescent doped ZnO phosphor by spray pyrolysis, The 10th Asia Pacific Confederation of Chemical Engineering, Kitakyushu-Japan, October 2004.</li>
            <li>Panatarani, I. W. Lenggoro, N. Itoh, H. Yoden, K. Okuyama, Polymer-supported solution synthesis of blue luminescent BaMgl10O17:Eu2+ particles, Materials Science and Engineering B 122 (2005) 188-195.</li>
            <li>Lenggoro, C. Panatarani and K. Okuyama, One step synthesis and photoluminescence of doped strontium titanate particles with controlled morphology, Materials Science and Engineering B 113 (2004) 60-66.</li>
            <li>Panatarani, I. W. Lenggoro and K. Okuyama, Size control of ZnO Nanoparticle by Variation of Residence Time in Lithium Nitrate Asissted Spray Pyrolysis Method, Proceeding of Asian Physics Symposium, December 2005.</li>
            </ol>
            <h3 data-aos="fade-left" > 2009</h3>
            <ol >
            <li>I Made Joni, Agus Purwanto, Ferry Iskandar and Kikuo Okuyama; Dispersion stability enhancement of titania nanoparticles in organic solvent using a bead mill process, Industrial &amp; Engineering Chemistry Research, 48(15), 6916-6922 (2009).</li>
            <li>I Made Joni, AgusPurwanto, Ferry Iskandar, Manabu Hazata and Kikuo Okuyama; Intense UV-light absorption of ZnO nanoparticles prepared using a pulse combustion-spray pyrolysis method, Chemical Engineering Journal, 155(1-2), 433-441 (2009).</li>
            </ol>
            <h3 data-aos="fade-right" > 2010</h3>
            <ol >
            <li>I Made Joni, Takuya Nishiwaki, Kikuo Okuyama, ShuujiIsoi and Ryotaro Kuribayashi; Enhancement of the thermal stability and the mechanical properties of a PMMA/aluminum trihydroxide composite synthesized via bead milling, Powder Technology, 204, 145-153, (2010).</li>
            <li>C Panatarani, D Anggoro, F Faizal Solution Phase Synthesis and Photoluminescent Properties of Nanocrystal LaPO 4: Eu 3+ AIP Conference Proceedings 1284 (1), 77-79</li>
            </ol>
            <h3 data-aos="fade-left" > 2011</h3>
            <ol >
            <li>I Made Joni, Ratna Balgis, Takashi Ogi, Toru Iwaki, Kikuo Okuyama; Surface functionalization for dispersing and stabilizing hexagonal boron nitride nanoparticle by bead milling, Colloids and Surfaces A: Physicochem. Eng. Aspects 388 (2011) 49– 58.</li>
            </ol>
            <h3 data-aos="fade-right" > 2012</h3>
            <ol >
            <li>I Made Joni, Takashi Ogi, AgusPurwanto, KikuoOkuyama, Terunobu Saitoh and Kazutaka Takeuchi; Decolorization of beads-milled TiO2 nanoparticles suspension in an organic solvent, Advanced Powder Technol., 23 (2012) 55–63.</li>
            </ol>
            <h3 data-aos="fade-left" > 2013</h3>
            <ol >
            <li>I Made Joni, Takashi Ogi, Toru Iwaki, and Kikuo Okuyama, Synthesis of a Colorless Suspension of TiO2 Nanoparticles by Nitrogen Doping and the Bead-Mill Dispersion Process, Ind. Eng. Chem. Res. 2013, 52, 547 – 555.</li>
            <li>I Made Joni, Camellia Panatarani, Darmawan Hidayat, Setianto, Bambang Mukti Wibawa, Anton Rianto, and Husni Thamrin, Synthesis and dispersion of nanoparticles, and Indonesian graphite processing, AIP Conf. Proc. 2013, 1554, pp 20-26.</li>
            <li>Darmawan Hidayat, I Made Joni, Setianto,Camellia Panatarani, and Kikuo Okuyama, Synthesis of lithium cobalt oxide using low-pressure spray pyrolysis, AIP Conf. Proc. 2013, 1554, pp 87-89.</li>
            <li>Camellia Panatarani and I Made Joni, Additional of polyethylene glycol on the preparation of LaPO4:Eu3+ phosphor, AIP Conf. Proc. 2013, 1554, pp 109-111.</li>
            <li>Bambang Mukti Wibawa, Abdul Al Mujahid, Jajat Yuda Mindara, Camellia Panatarani, I Made Joni and Rustam Efendi Siregar, Development and characterization of integrating sphere for photometry and radiometrymeasurement, AIP Conf. Proc. 2013, 1554, pp 170-173.</li>
            <li>Setianto, Liu Kin Men, Ferry Faizal, Bambang Mukti Wibawa, Doy Hardoyo Hardjo, Camellia Panatarani, and I Made Joni, Optical properties of amorphous silicon quantum dots (a-Si QDs) with various dot size using extended Hückel theory, AIP Conf. Proc. 2013, 1554, pp 198-200.</li>
            <li>Camellia Panatarani, Tuti Aryati Demen, Liu Kin Men, Dwindra Wilham Maulana, Darmawan Hidayat, and I Made Joni, Improvement on droplet production rate of ultrasonic - nebulizer in spray pyrolysis process, AIP Conf. Proc. 2013, 1554, pp 201-204.</li>
            </ol>
            <h3 data-aos="fade-right" > 2015</h3>
            <ol >
            <li>Muthukrishnaraj, S. Vadivel, I Made Joni, N. Balasubramanian, Development of reduced graphene oxide/CuBi2O4 hybrid for enhanced photocatalytic behavior under visible light irradiation, Ceramics International 41 (2015) 6164–6168.</li>
            <li>C Panatarani, S Fitriyadi, N Balasubramanian, NS Parmar, IM Joni, Preparation and characterizations of electroluminescent p-ZnO: N/n-ZnO: Ga/ITO thin films by spray pyrolysis method, AIP Advances 6 (2), 025121.</li>
            </ol>
            <h3 data-aos="fade-left" > 2016</h3>
            <ol >
            <li>C Panatarani, AO Maulana, A Rianto, IM Joni, Preparation of graphite oxide by sodium cholate intercalation and sonication from Indonesian natural graphite, AIP Conference Proceedings, 1712, 050025, 2016.</li>
            <li>IM Joni, C Panatarani, DW Maulana, Dispersion of fine phosphor particles by newly developed beads mill, AIP Conference Proceedings, 1712, 050019, 2016.</li>
            <li>MAA Al Mujahid, C Panatarani, DW Maulana, BM Wibawa, IM Joni, Integrating sphere design for characterization of LED efficacy, AIP Conference Proceedings, 1712, 030010, 2016.</li>
            <li>Annie Mufyda Rahmatika, W Widiyastuti, Sugeng Winardi, Tantular Nurtono, Siti Machmudah, I Made Joni, CFD simulation of pulse combustion’s performance, AIP Conference Proceedings, 1712, 040006, 2016.</li>
            <li>IM Joni, I Zannuary, D Hidayat, C Panatarani, A simple microcontroller-based sedimentation potential measurement for nanosuspension stability investigations, AIP Conference Proceedings, 1712, 030008, 2016.</li>
            <li>I Pratama, JY Mindara, DW Maulana, C Panatarani, IM Joni, Development of spin coater with close loop control system using ATMega8535 microcontroller, AIP Conference Proceedings, 1712, 030005, 2016.</li>
            <li>DW Maulana, D Marthatika, C Panatarani, JY Mindara, IM Joni, Development of aerosol assisted chemical vapor deposition for thin film fabrication, AIP Conference Proceedings, 1712,030002, 2016.</li>
            <li>C Panatarani, IM Joni, Challenging and development of phosphors for lighting applications, AIP Conference Proceedings, 1712,020003, 2016.</li>
            <li>SDT Dewi, C Panatarani, IM Joni, Design and development of DC high current sensor using Hall-Effect method, AIP Conference Proceedings, 1712,030006, 2016.</li>
            <li>Narendra S. Parmar, I. Made Joni and Kelvin G. Lynn, Sodium acceptor doping of ZnO crystals, AIP Conf. Proc. 1712, 050001 (2016).</li>
            <li>Nina Djustiana, Renny Febrida, Camellia Panatarani, Yuliafanny Imarundha, Elin Karlina, I Made Joni, Microstructure Analysis of Zirconia-Alumina-Silica Particles Made from Indonesia Natural Sand Synthesized Using Spray Pyrolysis Method, Key Engineering Materials (Volume 720).</li>
            </ol>      
        </div>


      </div>
    </div>
    
    
    
  </div>
  </Layout>
)

export default IndexPage
