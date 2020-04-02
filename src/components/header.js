import { Link } from "gatsby"
import React from "react"
import headerStyle from './header.css'
import logo from "../images/unpad.png" 
import hamburger from "../images/menu.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    
     
  AOS.init();
    
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false})
    }
  }
	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
      this.setState({ hasScrolled: false })
		} else {
      linksEl.style.display = 'block';
      this.setState({ hasScrolled: true })
		}
	}
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/research" activeClassName="active"> Research</Link>
          <Link to="/services" activeClassName="active">Services</Link>
          <Link to="/resource" activeClassName="active">Resource</Link>
          <Link to="/products" activeClassName="active">Products</Link>
          <Link to="/nanotech" activeClassName="active">Nanotech</Link>
          <Link to="/graphene" activeClassName="active">Graphene</Link>
          <Link to="/news" activeClassName="active"> News</Link>          
        </div>
        <div className="navNarrow">
            <img src={hamburger} width="30"  onClick={this.burgerToggle}></img>
            <div className="narrowLinks">
              {/* <Link to="/about">About Us</Link> */}
              <Link to="/">Home</Link>
              <Link to="/research">Research</Link>
              <Link to="/services">Services</Link>
              <Link to="/resource">Resource</Link>
              <Link to="/products">Products</Link>
              <Link to="/nanotech">Nanotech</Link>
              <Link to="/graphene">Graphene</Link>
              <Link to="/news"> News</Link>          
            </div>
        </div>
      </div>
    )
  }
}

export default Header;
