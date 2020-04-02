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
          <h3 className="underline" >2013</h3>          
          <ol>
            <li>Camellia Panatarani, The Development of Fineparticles in Universitas Padjadjaran , The 5th Nanoscience and Nanotechnology Symposium (NNS) Surabaya, 2013, Indonesia</li>
            <li>I Made Joni, Synthesis and dispersion of nanoparticles, and Indonesian graphite processing, <a href="http://portal.phys.unpad.ac.id/PIPS2013/invited_speakers.htm">Padjadjaran International Physics Symposium 2013 Bandung</a>.</li>
          </ol>
        </div>

        <div  data-aos="fade-left" className="pub_class">
          <h3 className="underline" >2015</h3>          
          <ol>
            <li>Camellia Panatarani, <a href="http://portal.phys.unpad.ac.id/PIPS2015/invited_speakers.htm">Padjadjaran International Physics Symposium 2015, UNPAD</a></li>
            <li>I Made Joni & Camellia P, The 6th Nanoscience and Nanotechnology Symposium (NNS) 2015, Solo 2015 (Development of High Scale Pulse Combustion Spray Pyrolysis System and Dispersion by Beads Mill).</li>
            <li>I Made Joni & Camellia P, RnD of Energy Diversification and Conservation at UNPAD: Development and Challenges, UK – Indonesia  Symposium on Engineering, Environmental Sustainablility and Food Security 2015, UNDIP</li>
          </ol>
        </div>

        <div  data-aos="fade-right" className="pub_class">
          <h3 className="underline" >2016</h3>          
          <ol>
            <li>I Made Joni and Camellia Pananatarani, Synthesis and Dispersion of Nanoparticles, Department of Industry Republic of Indonesia, 2016, Desiminasi Hasil Litbangyasa Current and Future Application Lithium Ion Batteries. Balai Besar Bahan Dan Barang Teknik, Bandung, Mei 2016.</li>
            <li>Camellia Panatarani and I Made Joni, ISFAP, Sulawesi, 2016.</li>
            <li>I Made Joni, An Overview of the Synthesis and Dispersion of Nanoparticles: Case Study on ZnO and TiO2 NPs for Pharmacy and Pharmaceutical Sciences. The 2nd International Seminar on Pharmaceutical Sciences and Technology (ISPST 2016), Universitas Padjadjaran, November 2016</li>
            <li>I Made Joni and Camellia Panatarani, Nanotechnology Overview in Mineral Resources Processing. The 3rd International Conference on ” Challanges in Biotechnology and Chemical Engineering (ICBC 2016), Annamalia University, India, November 2016.</li>
          </ol>
        </div>

        <div  data-aos="fade-left" className="pub_class">
          <h3 className="underline" >2017</h3>          
          <ol>
            <li>I Made Joni, Nanotechnology Development and Industries Collaboration, <a href="http://stksr.che.itb.ac.id/index.php/speaker/">International Seminar on Chemical Engineering in conjunction with Seminar Teknik Kimia Soehadi Reksowardojo (STKSR) 2017</a>, Chemical Engineering ITB</li>
            <li>I Made Joni Nanotechnology: Development and Challenges in Indonesia, <a href="https://www.jpfoundation.or.id/icepti-2017">International Conference and Exhibition on Powder Technology Indonesia 2017, Indonesia.</a></li>
          </ol>
        </div>

        <h2 id="international-journal">International Journal / Conference Procceding</h2>

        <Link to="/publications/before-2015">
        <h4 id="before-2015" className="underline" >Before 2015 (Click Here)</h4>  
        </Link>
        <div  data-aos="fade-right" className="pub_class">
          <h3 className="underline" >2016</h3>          
          <ol>
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

        <div  data-aos="fade-left" className="pub_class">
          <h3 className="underline" >2017</h3>          
          <ol>
            <li>Aripin, I. Made Joni, Nundang Busaeri, Ifkar Usrah, I. Nyoman Sudiana, and Svilen Sabchevski, Banana peel reductant for leaching medium grade manganese ore in sulfuric acid solution, AIP Conference Proceedings 1823, 020020 (2017).</li>
            <li>Wawan Hermawan, Hikmat Kasmara, Melanie, Camellia Panatarani, and I. Made Joni, Recent advances of rearing cabinet instrumentation and control system for insect stock culture, AIP Conference Proceedings 1801, 050005 (2017)</li>
            <li>E Rochima, S Y Azhary, R I Pratama, C Panatarani, and I M Joni, Preparation and Characterization of Nano Chitosan from Crab Shell Waste by Beads-milling Method iopscience.iop.org.</li>
          </ol>
        </div>

        <div  data-aos="fade-right" className="pub_class">
          <h3 className="underline" >2018</h3>          
          <ol>
            <li>I Made Joni, Vanitha Muthukannan, Wawan Hermawan, and Camellia Panatarani, Nanotechnology: Development and challenges in Indonesia, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021193" target="_blank">AIP Conference Proceedings 1927, 020005 (2018);</a></span></li>
            <li>Vanitha, N. Balasubramanian, I Made Joni, and Camellia Panatarani, Detection of mercury ions using L-cysteine modified electrodes by anodic stripping voltammetric method, <span ><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021194" target="_blank">AIP Conference Proceedings 1927, 030001 (2018)</a></span></li>
            <li>Reginawanti Hindersah, M. Rochimi Setiawati, B. Natalie Fitriatin, Pujawati Suryatama, Priyanka Asmiran, Camellia Panatarani, and I Made Joni, Graphite tail powder and liquid biofertilizer as trace elements source for ground nut, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021197" target="_blank">AIP Conference Proceedings 1927, 030004 (2018)</a></span></li>
            <li>T. Marlina, Tb. B. A. Kurnani, Y. A. Hidayati, K. N. Rahmah, I M. Joni, and E. Harlia, The quality of microorganism on coal bed methane processing with various livestock waste in laboratory scale, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021202" target="_blank">AIP Conference Proceedings 1927, 030009 (2018)</a></span></li>
            <li>Widya D. Ayuningtyas, Roni Ridwan, I M. Joni, E. T. Marlina, and Ellin Harlia, Activation of inoculum microorganism from dairy cattle feces, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021207" target="_blank">AIP Conference Proceedings 1927, 030014 (2018)</a></span></li>
            <li>Tubagus Benito Achmad Kurnani, Ellin Harlia, Yuli Astuti Hidayati, Eulis Tanti Marlina, A. N. Sugiarto, K. N. Rahmah, and I M. Joni, Biogas production from various coal types using beef cattle rumen’s liquid as a source of microorganisms consortium, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021208" target="_blank">AIP Conference Proceedings 1927, 030015 (2018)</a></span></li>
            <li>A. Hidayati, T. B. A. Kurnani, E. T. Marlina, K. N. Rahmah, E. Harlia, and I M. Joni, The production of anaerobic bacteria and biogas from dairy cattle waste in various growth mediums, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021214" target="_blank">AIP Conference Proceedings 1927, 030021 (2018)</a></span></li>
            <li>Hersanti, Syarif Hidayat, Agus Susanto, Regi Virgiawan, and I Made Joni, The effectiveness of Penicillium sp. mixed with silica nanoparticles in controlling Myzus persicae, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021222" target="_blank">AIP Conference Proceedings 1927, 030029 (2018)</a></span></li>
            <li>Yanwar Faza, Zulia Hasratiningsih, Andrie Harmaji, and I Made Joni, Preparation and characterization of zirconia-alumina system via solution and solid phase mixing method, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021223" target="_blank">AIP Conference Proceedings 1927, 030030 (2018)</a></span></li>
            <li>Karlina, S. Susra, Y. Fatmala, H. M. Hartoyo, V. Takarini, K. Usri, R. Febrida, N. Djustiana, C. Panatarani, and I M. Joni, Morphological characterization of ceramic fillers made from Indonesian natural sand as restorative dental materials, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021224" target="_blank">AIP Conference Proceedings 1927, 030031 (2018);</a></span></li>
            <li>Emma Rochima, Safira Utami, Herman Hamdani, Sundoro Yoga Azhary, Danar Praseptiangga, I Made Joni, and Camellia Panatarani, The dispersion of fine chitosan particles by beads-milling, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021225" target="_blank">AIP Conference Proceedings 1927, 030032 (2018);</a></span></li>
            <li>Ellin Harlia, H. Hamdani, Winantris, Tb. B. A. Kurnani, Y. A. Hidayati, E. T. Marlina, K. N. Rahmah, H. Arief, R. Ridwan, and I M. Joni, The impact of anaerobic microorganisms activities in ruminant waste and coal, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021227" target="_blank">AIP Conference Proceedings 1927, 030034 (2018);</a></span></li>
            <li>Heraldo Yanindra Pradana, I Made Joni, Liu Kin Men, Yayah Yuliah, Lukman Nulhakim, Vanitha Muthukanan, and Camellia Panatarani, Synthesis and characterization of ZnO:Ca 2+ prepared by simple solution method, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021231" target="_blank">AIP Conference Proceedings 1927, 030038 (2018);</a></span></li>
            <li>Afifah Iswara Aji, Danar Praseptiangga, Emma Rochima, I Made Joni, and Camellia Panatarani, Optical transparency and mechanical properties of semi-refined iota carrageenan film reinforced with SiO 2 as food packaging material, <span><a href="https://aip.scitation.org/doi/abs/10.1063/1.5021232" target="_blank">AIP Conference Proceedings 1927, 030039 (2018);</a></span></li>
            <li>Apriliana Eka Saputri, Danar Praseptiangga, Emma Rochima, Camellia Panatarani, and I Made Joni, Mechanical and solubility properties of bio-nanocomposite film of semi refined kappa carrageenan/ZnO nanoparticles, <span><a href="https://doi.org/10.1063/1.5021233" target="_blank">AIP Conference Proceedings 1927, 030040 (2018);</a></span></li>
            <li>Assifa Rahma Khoirunnisa, I Made Joni, Camellia Panatarani, Emma Rochima, and Danar Praseptiangga, UV-screening, transparency and water barrier properties of semi refined iota carrageenan packaging film incorporated with ZnO nanoparticles, <span><a href="https://doi.org/10.1063/1.5021234" target="_blank">AIP Conference Proceedings 1927, 030041 (2018);</a></span></li>
            <li>Emma Rochima, Elisah Fiyanih, Eddy Afrianto, Ujang Subhan, Danar Praseptiangga, Camellia Panatarani, and I Made Joni, The addition of nanochitosan suspension as filler in carrageenan-tapioca biocomposite film, <span><a href="https://doi.org/10.1063/1.5021235" target="_blank">AIP Conference Proceedings 1927, 030042 (2018);</a></span></li>
            <li>Ujang Subhan, Vanitha Muthukannan, Sundoro Yoga Azhary, Muhammad Fakhri Mulhadi, Emma Rochima, Camellia Panatarani, and I Made Joni, Development and performance evaluation of air fine bubbles on water quality of thai catfish rearing, <span><a href="https://doi.org/10.1063/1.5021235" target="_blank">AIP Conference Proceedings 1927, 030043 (2018)</a>;</span></li>
            <li>Hery Supratman, Diky Ramdani, Sondy Kuswaryan, Dwi Cipto Budinuryanto, and I Made Joni, Application of probiotics and different size of sodium bicarbonate powders for feedlot sheep fattening, <span><a href="https://doi.org/10.1063/1.5021236" target="_blank">AIP Conference Proceedings 1927, 030045 (2018)</a>;</span></li>
            <li>Hikmat Kasmara, Melanie, Dea Audia Nurfajri, Wawan Hermawan, and Camellia Panatarani, The toxicity evaluation of prepared Lantana camara nano extract against Spodoptera litura <span><a href="https://doi.org/10.1063/1.5021239" target="_blank">(Lepidoptera: Noctuidae), AIP Conference Proceedings 1927, 030046 (2018);</a></span></li>
            <li>I.Made Joni, M.Vanitha, P.Camellia, N.Balasubramanianc, Augmentation of graphite purity from mineral resources and enhancing % graphitization using microwave irradiation: XRD and Raman studies, <span><a href="https://www.sciencedirect.com/science/article/pii/S0925963518302978?via%3Dihub" target="_blank">Diamond and Related Materials, Volume 88, September 2018, Pages 129-136</a></span>;</li>
            <li>Tailoring the properties of cerium doped zinc oxide/reduced graphene oxide composite: Characterization, photoluminescence study, antibacterial activity, M.Vanitha. I Made Joni, Camellia, N.Balasubramanian, <span><a href="https://doi.org/10.1016/j.ceramint.2018.07.226" target="_blank">Ceramics International</a></span></li>
          </ol>
        </div>

        <div  data-aos="fade-left" className="pub_class">
          <h3 className="underline" >2019</h3>          
          <ol>
            <li>Preparation and preliminary characterization of sago flour and semi refined kappa carrageenan-based biocomposite film incorporated with coconut crabs chitosan nanoparticles, H Rasulu,D Praseptiangga, I M Joni and A H Ramelan, IOP Conf. Series: Materials Science and Engineering 633 (2019) 012044</li>
            <li>Formulation and characterization of α-mangostin in chitosan nanoparticles coated by sodium alginate, sodium silicate, and polyethylene glycol,N Wathoni, A Rusdin, E Febriani, D Purnama, W Daulay, SY Azhary, ...,Journal of Pharmacy And Bioallied Sciences 11 (8), 619</li>
            <li>Dispersion of amorphous silica nanoparticles via beads milling process and their particle size analysis, hydrophobicity and anti-bacterial activity,IM Joni, M Vanitha, C Panatarani, F Faizal,Advanced Powder Technology</li>
            <li>Structural characterization of mixed local material for a ceramic porcelain insulator,H Aripin, I Usrah, N Busaeri, R Priyadi, Y Hermawan, IN Sudiana, IM Joni, ...,IOP Conference Series: Materials Science and Engineering 674 (1), 012031</li>
            <li>Coal Utilization as a Growth Medium of Microbial Consortium from Dairy Cow Feces,E Harlia, ET Marlina, YA Hidayati, TBA Kurnani, KN Rahmah, IM Joni, ...,IOP Conference Series: Earth and Environmental Science 334 (1), 012028</li>
            <li>The Role of Rumen Fluid as A Source of Methanogenic Bacteria on Coalbed Methane Activation,ET Marlina, Y Ardiansyah, TBA Kurnani, YA Hidayati, KN Rahmah, ...,IOP Conference Series: Earth and Environmental Science 334 (1), 012019</li>
            <li>Preparation and preliminary characterization of sago flour and semi refined kappa carrageenan-based biocomposite film incorporated with coconut crabs chitosan nanoparticles,H Rasulu, D Praseptiangga, IM Joni, AH Ramelan,IOP Conference Series: Materials Science and Engineering 633 (1), 012044</li>
            <li>Nanoparticles Targeted Drug Delivery System via Epidermal Growth Factor Receptor: a Review,A Rusdin, N Wathoni, K Motoyama, IM Joni, R Lesmana, M Muchtaridi,Indonesian Journal of Pharmaceutics 1 (3), 77-91</li>
            <li>Development of DC smart grid model for voltage stability disturbance,DW Maulana, F Faizal, FF Florena, F Alfandi, C Panatarani, IM Joni, ...,IOP Conference Series: Materials Science and Engineering 550 (1), 012010</li>
            <li>Development of high DC-current measurement system using closed loop Hall Effect configuration,F Faizal, M Hafidz, FF Florena, DW Maulana, A Abdurochman, ...,IOP Conference Series: Materials Science and Engineering 550 (1), 012013</li>
            <li>Synthesis and characterization of chitosan: SiO2 nanocomposite by ultrasonic spray drying,SY Azhary, D Purnama, FF Florena, M Vanitha, C Panatarani, IM Joni,IOP Conference Series: Materials Science and Engineering 550 (1), 012037</li>
            <li>Metal oxides, metal sulphides and hybrid cathode materials for aluminium ion batteries–a mini review,M Vanitha, IM Joni, BM Wibawa, C Panatarani,IOP Conference Series: Materials Science and Engineering 550 (1), 012003</li>
            <li>Numerical investigation of droplet evaporation phenomena in the spray methods,FF Florena, F Faizal, DW Maulana, ST Satrio, C Panatarani, IM Joni, ...,IOP Conference Series: Materials Science and Engineering 550 (1), 012031</li>
            <li>Preparation and Characterization of Biopolymer Chitosan Nanofiber from Coconut Crab ShellPreparation and Characterization of Biopolymer Chitosan Nanofiber from Coconut Crab Shell,H Rasulu, D Praseptiangga, IM Joni, AH Ramelan,International Journal on Advanced Science, Engineering and Information&nbsp;…</li>
            <li>In vitro study of plant growth promoting rhizobacteria (PGPR) and endophytic bacteria antagonistic to Ralstonia solanacearum formulated with graphite and silica nano particles&nbsp;…,D Luciana, Hersanti, I Noor, H Sri, IM Joni,Biocatalysis and Agricultural Biotechnology, 1-10</li>
            <li>Nanoparticles targeted drug delivery system via epidermal growth factor receptor,A Rusdin, N Wathoni, K Motoyama, IM Joni, R Lesmana,Purification of Indonesian Natural Graphite by Acid Leaching Method as Nuclear Fuel Matrix: Physical Characterization</li>
            <li>Purification of Indonesian Natural Graphite by Acid Leaching Method as Nuclear Fuel Matrix: Physical Characterization,D Mustika, A Fisli, IM Joni, R Langenati, J Setiawan,International Journal of Chemistry 11 (1), 9-17</li>
          </ol>
        </div>

        <div  data-aos="fade-right" className="pub_class">
          <h3 className="underline" >2020</h3>          
          <ol>
            <li>Diametral Tensile Strength and Hardness Evaluation of Prototype Composite Based on Natural Zircon Sand Using Geopolymerization Method with Coupling Agent Variation,HM Hartoyo, V Takarini, R Febrida, E Karlina, I Joni,Key Engineering Materials 829, 87-92</li>
            <li>Mechanical Test of Aluminum-Zirconium-Silicate Composite Prototype with Filler Volume Variation,E Karlina, K Usri, R Febrida, C Panatarani, I Joni, Y Fatmala,Key Engineering Materials 829, 81-86</li>
            <li>Diametral Tensile Strength and Reflectance Evaluation of Dental Composite Prototype Using Modified Dental Composite Procedures,R Febrida, W Sahilah, S Adriana, N Djustiana, E Karlina, Y Faza, ...,Key Engineering Materials 829, 100-107</li>
          </ol>
        </div>


        <h2 id="seminar-inter-regional">Seminar International/Regional</h2>
        <div  data-aos="fade-left" className="pub_class">     
        <ol >
            <li>Panatarani, I. W. Lenggoro and K. Okuyama, Size control of ZnO Nanoparticle by Variation of Residence Time in Lithium Nitrate Asissted Spray Pyrolysis Method, Proceeding of Asian Physics Symposium, December 2005.</li>
            <li>Panatarani, D. Hidayat, B. M. Wibawa, D. Anggoro and I M. Joni, Opportunities and Application of Liquid and Aerosol Processing: Preparation of Functional Nanoparticles, International Symposium on Functional Materials Science, Bali, 2011.</li>
            <li>Panatarani, I M. Joni, B. M. Wibawa, D. Anggoro and D. Hidayat, Development on Liquid and Aerosol Processes Instrumentation Systems, International Symposium on Functional Materials Science, Bali, 2011.</li>
            <li>Kikuo Okuyama, I Made Joni, Widiyastuti, and Agus Purwanto, Nanomaterials Processing Technology and Its Future Trend, The International Seminar on Fundamentals and Applications of Chemical Engineering (ISFAChE) 2010, 3-4 October Bali, 2010.</li>
            <li>I Made Joni, Agus Purwanto, Ferry Iskandar, Kikuo Okuyama, Enhanced optical transparency of bead-milled titania nanoparticles dispersion in organic solvent, International Conference on Nanostructured Materials 2010, Roma, September 13 - 16, 2010.</li>
            <li>I Made Joni, Widiyastuti, Agus Purwanto, Ferry Iskandar, Manabu Hazata, and Kikuo　Okuyama, A pulse combustion-spray pyrolysis process for the preparation of ZnO　nanoparticles with intense UV-light absorption, World Conference on Particle　Technology (WCPT6-2010), Nurenberg, German, 26-29 April, 2010.<br/> M. Joni, F. Iskandar, K. Okuyama, Dispersion of titania nanoparticles in organic solvent via a bead milling process, World Conference on Particle Technology for Students, Delft, Netherlands, 22 - 25 April 2010.</li>
            <li>I M. Joni, C. Panatarani, D. Mulyadani, D. Mulyana, K. Susanto, D Hidayat, Automatic and Computer Aided Temperature Controller to Synthesis Phosphor Nanoparticles, SKIM, Malaysia, 2007.</li>
            <li>Panatarani, I M. Joni and K. Okuyama, Simple Method of Fine Phosphor Particles Preparation, SKIM, Malaysia 2007.</li>
            <li>I M. Joni and C. Panatarani, Synthesis and Characterization of Metal Oxide Nanoparticles, Proceeding 1st Joint Symposium on Syntheses and Physical Properties of Functional Magnetic Materials, ITB, 2007.</li>
            <li>Panatarani, I M. Joni and L. Yusastri, Polyethylene Glycol Supported Synthesis of YAG:Ce3+ Particles, Proceeding of ITSF Seminar on Science and Technology, 2007.</li>
            <li>F. Joland, I M. Joni dan C. Panatarani, The effect of Ce3+ on the crystallinity of nanosized yttrium aluminum garnet, 1st International Conference on Advance Material and Nanotechnology, Serpong, 2006.</li>
            <li>Yusastri, I M. Joni dan C. Panatarani, Synthesis of nano-sized yttrium aluminum garnet by sol gel method, 1st International Conference on Advance Material and Nanotechnology, Serpong, 2006.</li>
            <li>I M. Joni, D. Nurjaeni, C. Panatarani, D. Hidayat, T. A. Demen and D. W. Maulana, Development of beads mill with high separation efficiency performance, 2nd ICFMS2014.</li>
            <li>Panatarani, N. Muthahhari, A. Rianto andI M. Joni, Purification and preparation of graphite oxide from natural graphite, The 4th International Conference on Theoretical Physics and Its Applications 2014.</li>
            <li>Nanda, D. Hidayat, C. Panatarani, D.W. Maulana and I M. Joni, Development of web-based power monitoring system for a pulse combustion spray pyrolysis using Java method, The 4th International Conference on Theoretical Physics and Its Applications 2014.</li>
            <li>Megayanti, C. Panatarani, and I M. Joni, Development of microheater for gas sensor using an AT-Mega 8535 temperature controller using PWM, The 4th International Conference on Theoretical Physics and Its Applications 2014.</li>
            <li>Dalimunthe, J. Y. Mindara, C. Panatarani and I M. Joni, Development of smart DC grid model, The 4th International Conference on Theoretical Physics and Its Applications 2014.</li>
            <li>Arinton, A. Rianto, F. Faizal, D. Hidayat,C. Panatarani and I M. Joni, Effect of binders on natural graphite powder-based gas diffusion electrode for Mg-Air cell, The 4th International Conference on Theoretical Physics and Its Applications 2014.</li>
        </ol>
        </div>
        <h2 id="national-journal">National Journal </h2>
        <div  data-aos="fade-right" className="pub_class">          
          <ol>
            <li>Panatarani, F. Faizal, dan I M. Joni, Sintesis Nanokristal LaPO4 yang Didoping Logam Tanah Jarang dan Sifat Luminisensinya, Bionatura Volume 16, Nomor 2, Juli 2014, ISSN 1411-0903.</li>
            <li>Anggoro, F. Faizal, B. M. Wibawa, I. M. Joni dan C. Panatarani, Simulasi Pengaruh Ukuran Partikel terhadap Sifat Luminisensi Partikel YAG:Ce3+ Akibat Eksitasi Cahaya Biru dengan Model Raytracing, Jurnal Nanosains dan Nanoteknologi, Edisi Khusus Agustus (2009) pp. 74-78.</li>
            <li>Deni Mustika, Sudirman Sudirman, Adel Fisli, I Made Joni, Th. Rina M.,&nbsp;THE POTENTIAL OF INDONESIAN GRAPHITE AS RDE FUEL MATRIX,&nbsp;JUSAMI Vol. 20, No. 2, January 2019&nbsp;</li>
          </ol>
        </div>

        <h2 id="national-seminar">National Seminar </h2>
        <div  data-aos="fade-left" className="pub_class">          
          <ol>
            <li>Darmawan Hidayat, Bambang Mukti Wibawa, I Made Joni, Camellia Panatarani, Simulasi Electrostatic Precipitator Wire-Plate untuk Penangkap Partikel Oksida Logam pada Reaktor Spray Pyrolysis, Prosiding Seminar Nasional FMIPA Universitas Negeri Surabaya, 2012.</li>
            <li>Panatarani, D. Hidayat, B. M. Wibawa, D. Jumhur, F. Faizal dan I M. Joni, Sifat Luminisensi Film Tipis ZnO yang Dideposisi dengan Metode Spray Pyrolysis, Prosiding Seminar Nasional FMIPA Universitas Negeri Surabaya, 2012.</li>
            <li>Panatarani, B. M. Wibawa, D. Hidayat dan I M. Joni, Pengembangan Bahan Luminisensi dan Aplikasinya untuk Lampu Hemat Energi, Prosiding Seminar Nasional Material 2012</li>
            <li>Panatarani, B.M. Wibawa, D. Anggoro, D. Hidayat, I M. Joni, Sintesis Film dan Partikel Y2O3:Eu2+ Satu Step, Seminar Nasional Sains dan Teknologi, UNILA, 2011.</li>
            <li>Panatarani, I. Hermiasari, F. Faizal, V. Hutabalian, B. M. Wibawa dan I M. Joni, “Pengembangan Antar Muka Alat Karakterisasi Pola Sebaran Cahaya 3D LED”, Seminar Nasional Energi 2010, Jatinangor, Indonesia</li>
            <li>西脇卓也、I Made Joni、Iskandar Ferry、奥山喜久夫：ビーズミルプロセスによる有機溶媒中での酸化チタンナノ粒子の分散、化学工学会第41回秋季大会、広島大学東広島キャンパス、2009/9/16-18.</li>
            <li>Iskandar Ferry、I Made Joni、奥山喜久夫：パルス燃焼噴霧熱分解法によるZnOナノ粒子の合成、化学工学会第41回秋季大会、広島大学東広島キャンパス、2009/9/16-18.</li>
            <li>M. Wibawa, V. Hutabalian, I M. Joni danC. Panatarani, Ray Tracer sebagai Alat Uji Distribusi Cahaya pada LED”, Proceeding Seminar Nasional Sains dan Teknologi, Unila, Lampung 2008.</li>
            <li>Panatarani, I M. Joni, B. M. Wibawa, A. I. Noorwanda, A. M. Pradhonodan K. Heru, “Rancang Bangun Furnace Temperatur Tinggi sebagai Sub-sistem Reaktor Spray Pyrolysis, Proseding Seminar Nasional Sains dan Teknologi, Unila, Lampung 2008.</li>
            <li>M. Wibawa, A. M. Pradhono, F. Faizal, I. Saputro, I M. Joni dan C. Panatarani, “Simulasi Distribusi Suhu Radiatif Tiga Dimensi pada Reaktor Spray Pyrolysis”, Prosiding Seminar Nasional PTKRN, Batan-Universitas Padjadjaran, Bandung, 2008.</li>
            <li>Yusastri, I M. Joni dan C. Panatarani, Sintesis YAG:Ce3+dengan metode sol gel, Simposium Nasional Fisika XX, Makassar September 2006.</li>
            <li>F. Joland, I M. Joni dan C. Panatarani, Pengaruhkonsentrasi Ce3+terhadap kristalinitas yttrium aluminum garnet,SimposiumNasionalFisika XX, Makassar September 2006.</li>
            <li>Yusastri, I M. Joni dan C. Panatarani, Sintesis YAG:Ce3+dengan metode sol gel, Seminar Nasional Himpunan Kimia Indonesia, Institut Pertanian Bogor, 2006, September 2006.</li>
            <li>F. Joland, I M. Joni dan C. Panatarani, Pengaruh konsentrasi Ce3+terhadap kristalinitas yttrium aluminum garnet, Seminar Nasional Himpunan Kimia Indonesia, Institut Pertanian Bogor, 2006.</li>
            <li>A. Egaputri, C. Panatarani, dan I Made Joni, Rancang Bangun Solar Water Heater dan Pelat Absorber untuk Pemanfaatan Panas Buangan Panel Surya, Prosiding Seminar Nasional MIPA, Universitas Padjadjaran 2014.</li>
         </ol>
        </div>

      </div>
    </div>
  </div>
  </Layout>
)

export default IndexPage
