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

At Skinny Dip, we believe in the power of storytelling and the art of weaving narratives that capture the essence of real-life experiences. Through our blog, we strive to celebrate the beauty, complexity, and authenticity of the human experience by curating a collection of thought-provoking and captivating essays.

Our team of passionate writers, avid readers, and literary enthusiasts are dedicated to exploring the vast landscape of human stories, transcending genres and boundaries. We seek to delve into the depths of personal journeys, memories, and observations, bringing forth the raw emotions and universal truths that connect us all.

Our blog serves as a platform for both established and emerging writers to share their unique perspectives and narratives. We are passionate about fostering a diverse and inclusive community, where voices from different backgrounds, cultures, and experiences can be heard and appreciated. Through these diverse voices, we hope to inspire empathy, understanding, and connection among our readers.

In addition to our curated collection of essays, memoirs, and personal narratives, we also provide valuable resources and writing tips for aspiring creative nonfiction writers. We believe in nurturing and supporting the literary community, offering guidance and encouragement to those who seek to explore the realm of nonfiction storytelling.

Whether you are an avid reader, a writer searching for inspiration, or someone simply curious about the power of personal narratives, we invite you to embark on this journey with us. Together, let's celebrate the magic of true stories and the incredible power of personal testimony.

Welcome to Skinny Dip, where creativity meets truth.</p>
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
