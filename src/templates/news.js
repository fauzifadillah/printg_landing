import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
// import { rhytm, scale } from '../utils/typography'


import Header from '../components/header'
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from "styled-components"
import NoWaveSection from "../components/NoWaveSection"
import '../components/css_pages/research.css'

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


class NewsPostContentfulTemplate extends React.Component {
    render() {
        const post = this.props.data.contentfulPrintgNews
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext

        return (
            <Layout>
            <div className="Research">
                <div className="ResearchGroup">
                {/* <img src={require('../images/printg.png')} alt="" width="100"/> */}
                    <h1>Nanotechnology and Graphene </h1>
                    <h1>Research Centre</h1>
                    <p> Transforming nanotechnology to solve real world problems</p>
                    {/* <Link to="/page-2">Watch the vid!</Link> */}
                    
                {/* <Wave/> */}
                </div>
                </div>
                <h1>{post.judul_post}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.kontenPost.childMarkdownRemark.html}}/>
                <ul style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.slug} rel="prev">
                                {previous.judul_post}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.slug} rel="next">
                                {next.judul_post}
                            </Link>
                        )}
                    </li>
                </ul>
                
            </Layout>
        )
    }
}

export default NewsPostContentfulTemplate

export const pageQuery = graphql`
    query ContentfulNewsPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        contentfulPrintgNews( slug: { eq: $slug }) {
            judul_post
            author
            kontenPost {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`