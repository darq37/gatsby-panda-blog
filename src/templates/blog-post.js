import React from "react"
import { graphql } from "gatsby"
import {DiscussionEmbed} from "disqus-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Global } from "@emotion/core"

const disqusConfig = {
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: {identifier: slug, title},
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Global>
        <PageBody>
          <DiscussionEmbed {...disqusConfig}/>
        </PageBody>
      </Global>
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
