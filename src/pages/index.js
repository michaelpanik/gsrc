import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => (
  <div class="home">
    <div>
      <h1>Welcome to Great Set Record Collective</h1>
      <p><em>
        <StaticQuery
          query={graphql`
            query BandsQuery {
              allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      name
                      path
                    }
                  }
                }
              }
            }
          `}
        render={({allMarkdownRemark}) => (
          allMarkdownRemark.edges.map(({node}, i) => {
            const divider = i === allMarkdownRemark.edges.length - 1 ? '' : ' | '

            return (
              <>
                <Link to={node.frontmatter.path}>{node.frontmatter.name}</Link>{divider}
              </>
            )
          })
        )}
      />
      </em></p>
    </div>
  </div>
)

export default IndexPage
