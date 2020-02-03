import React from "react"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data: { markdownRemark }, pageContext: { slug } }) => {
  const post = markdownRemark
  const disqusConfig = {
    shortname: "PandaWebDev",
    config: { identifier: slug },
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div
            css={css`
            margin: 0 auto;
            max-width: 700px;
            text-align: center;
          `}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
