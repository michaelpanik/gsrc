import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { parseText } from "../helpers"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const SocialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
  }

  const createEmbed = () => {
    return { __html: frontmatter.music_embed }
  }

  return (
    <Layout>
      <div class="music-embed" dangerouslySetInnerHTML={createEmbed()}></div>
      <div className="container">
        <Link to="/">Great Set Record Collective</Link>
        <h1>{frontmatter.name}</h1>
        <h2>About</h2>
        <p>{parseText(frontmatter.about)}</p>
        <div class="box">
          <h3>Members</h3>
          <ul>
            {frontmatter.band_members.map(({ member }) => (
              <li>
                <strong>{member.name}</strong>
                <br />
                {member.instrument}
              </li>
            ))}
          </ul>
        </div>
        <div class="box">
          <h3>Hometown</h3>
          <p>{frontmatter.hometown}</p>
        </div>
        <div class="box">
          <h3>Sounds Like</h3>
          <ul>
            {frontmatter.sounds_like.map(e => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
        <div class="box">
          <h3>Social</h3>
          {frontmatter.social.map(({ channel }) => {
            const Icon = SocialIcons[channel.channel]

            return (
              <div>
                <a href={channel.url + channel.username}>
                  <Icon /> @{channel.username}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        featured_image
        about
        sounds_like
        music_embed
        band_members {
          member {
            name
            instrument
          }
        }
        social {
          channel {
            channel
            url
            username
          }
        }
        hometown
        photos
        seo {
          title
          description
        }
      }
    }
  }
`

export default Template
