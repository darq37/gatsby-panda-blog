import React from "react"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data: { mongodbPandaBasePosts }}) => {
  const post = mongodbPandaBasePosts
  const disqusConfig = {
    shortname: "PandaWebDev",
    config: { identifier: post.id },
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.description}/>
      <div
            css={css`
            margin: 0 auto;
            max-width: 700px;
            text-align: center;
          `}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}

export const query = graphql`
query {
  mongodbPandaBasePosts {
    date
    id
    description
    content
    title
  }
}
`

/*const PostObject = {
  id: "string",
  title: "zx",
  description: "",
  date: "RRRR-MM-DD",
  content: "zxcaas"
}*/