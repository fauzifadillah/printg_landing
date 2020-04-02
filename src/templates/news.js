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
import '../components/css_pages/news.css'

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
            <div className="News">
                <div className="NewsGroup">
                    <h1>Nanotechnology and Graphene </h1>
                    <h1>Research Centre</h1>
                    <p> Transforming nanotechnology to solve real world problems</p>
                </div>
            </div>


            <div className="Cards_news">
                <div className="CardGroup_news">
                    <h3>{post.judul_post}</h3>
                    <h6>{post.tanggal}</h6>
                    <div dangerouslySetInnerHTML={{ __html: post.kontenPost.childMarkdownRemark.html}}/>
                        <h4>You may also want to read:</h4>
                        <div className="double_figs">
                            <h5>
                                {previous && (
                                    <Link to={previous.slug} rel="prev">
                                        {previous.judul_post}
                                    </Link>
                                )}
                            </h5>
                            <h5>
                                {next && (
                                    <Link to={next.slug} rel="next">
                                        {next.judul_post}
                                    </Link>
                                )}
                            </h5>
                        </div>
                </div>
            </div>

                
                
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
            tanggal(formatString: "dddd DD MMMM YYYY")
            kontenPost {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`