import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            color: white;
          `}
        >
          Witaj na moim blogu! Poczytaj sobie lub wstaw własny post :)
        </h1>
        <h4>{data.allMongodbPandaBasePosts.totalCount} posty</h4>
        {data.allMongodbPandaBasePosts.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.id}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.title}{""}
                <span
                  css={css`
                    color: black;
                  `}
                >
                  — {node.date}
                </span>
              </h3>
              <p>{node.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMongodbPandaBasePosts {
      edges {
        node {
          id
          title
          description
          date(formatString: "MMMM DD, YYYY")
        }
      }
      totalCount
    }
  }
  
`