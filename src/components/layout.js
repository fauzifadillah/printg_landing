/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Header from './header'
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      allContentfulLink (sort: { fields: [createdAt], order: ASC }){
        edges{
          node{
            title
            url
            createdAt
          }
        }
      }
    }
  `)
  

  return (
    <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'author', content: data.site.siteMetadata.author },
      ]}
    />    
      <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer data={data}>
        Copyright 2020 Print-G <a href="mailto:support@print-g.ac.id"></a>
        </Footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
