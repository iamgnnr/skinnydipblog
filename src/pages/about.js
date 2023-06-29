import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="article-card">
        <div className="about-title"><h1>About</h1></div>
        <StaticImage
          className="aboutImage"
          formats={["auto", "webp", "avif"]}
          src="../images/about.png"
          width={600}
          height={600}
          alt="Psych0p0mp"
        />
        <p className="about-us">Psych0p0mp is a digital journal dedicated to psychedelic art and alternative spirituality. I started it with the aim of celebrating the vibrant and mind-bending world of psychedelic art. I aim explore the rich history of the genre, from its origins in the counterculture of the 1960s to its continued evolution today.

I believe that art is more than just visual spectacle, it is a means of exploring the deepest reaches of the human psyche, of expanding consciousness and unlocking the mysteries of human experience. For updates, follow me on <a href="https://twitter.com/justgnnr">Twitter</a>.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
