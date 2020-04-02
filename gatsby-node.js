const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages =({ graphql, actions }) => {
    const { createPage } = actions

    const newsPost = path.resolve( `./src/templates/news.js`)
    return graphql(
        `
            {
                allContentfulPrintgNews {
                    edges {
                      node {
                        judul_post
                        slug
                      }
                    }
                  }                
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // bikin post baru

        const posts = result.data.allContentfulPrintgNews.edges

        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: post.node.slug,
                component: newsPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next
                },                
            })
        })
    })
}