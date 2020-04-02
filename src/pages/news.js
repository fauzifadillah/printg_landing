import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import Header from '../components/header'
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from "styled-components"
import NoWaveSection from "../components/NoWaveSection"
import '../components/css_pages/research.css'
import Img from "gatsby-image"

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

const NewsImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
`

// import { rhytm, scale } from '../utils/typography'

class NewsPostContentfulIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allContentfulPrintgNews.edges

        return (
            <Layout>
            <div>
                <div className="News">
                <div className="NewsGroup">
                {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
                    <h1>Nanotechnology and Graphene </h1>
                    <h1>Research Centre</h1>
                    <p> Transforming nanotechnology to solve real world problems</p>
                    {/* <Link to="/page-2">Watch the vid!</Link> */}
                    
                {/* <Wave/> */}
                </div>
                </div>
                <div className="Cards_news">
                <h2>News</h2>
                <div className="CardGroup_news">
                {posts.map(({ node }) => {
                    const judul_post = node.judul_post || node.slug
                    return (
                        <div key={node.slug}>
                            <h3
                                style={{
                                    marginBottom: 0,
                                }}
                            >
                            
                                <Link style={{ boxShadow: `none` }} to={node.slug}>
                                    {judul_post}
                                </Link>
                            </h3>
                            <h6>{node.tanggal}</h6>
                            <p>{node.deskripsi}</p>
                            
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
            </Layout>
        )
    }
}

export default NewsPostContentfulIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulPrintgNews {
           edges {
               node {
                   judul_post
                   deskripsi
                   author
                   slug
                   dokumentasi {
                    sizes {
                        src
                      }
                  }
                  tanggal(formatString: "dddd DD MMMM YYYY")
               }
           }
        }
    }
`