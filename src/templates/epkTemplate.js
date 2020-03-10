import React from 'react'
import {graphql} from 'gatsby'

const Template = ({data}) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <h1>{frontmatter.title}</h1>
    )
}

export const pageQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            path
            title
        }
    }
}
`

export default Template