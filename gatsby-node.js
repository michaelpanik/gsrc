/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions
    const epkTemplate = path.resolve(`src/templates/epkTemplate.js`)
    const result = await graphql(`
    {
        allMarkdownRemark(
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query for EPKs')
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: epkTemplate,
            context: {},
        })
    });
}