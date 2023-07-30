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
        <div className="about-container">
          <StaticImage
            className="aboutImage"
            formats={["auto", "webp", "avif"]}
            src="../images/about.png"
            width={600}
            height={600}
            alt="Psych0p0mp"
          />
          <p className="about-us">
            Welcome to Skinny Dip, a blog dedicated to unveiling the enchanting intersection of technology and nature through the art of poetry. I built this blog is a testament to the harmonious coexistence of two seemingly disparate realms – the ever-evolving virtual landscape and the timeless beauty of Nature. Every poem and image featured here is created by artificial intelligence, and inspired by the natural world.

In a world where screens have become our windows to the outside, this blog is an invitation to embark on a poetic journey that marries the wonders of technology with the awe-inspiring creations of nature. To learn more about how I built this blog check out <a href="https://medium.com/@justgnnr/how-to-build-a-static-blog-with-automated-a-i-generated-content-fc7f05b6b084">my Medium article</a> about the project.
          </p>
        </div>
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
