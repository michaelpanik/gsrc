import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => (
  <>
  <center>
    <h1>Welcome to Great Set Record Collective</h1>
    <p><em>
      <StaticQuery
        query={graphql`
          query BandsQuery {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    path
                  }
                }
              }
            }
          }
        `}
      render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(({node}) => {
          // console.log(node.node)
          return (
            <>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link> |
            </>
          )
        })
      )}
    />
    </em></p>
  </center>
  </>
)

export default IndexPage
