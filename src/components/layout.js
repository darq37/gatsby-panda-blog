import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "./layout.css"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-family: "Oswald", sans-serif;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`} className="notactive" activeClassName="active">
        About
      </Link>

      <Link to={`/my-files/`} className="notactive" activeClassName="active">
        Pliki
      </Link>
      <Link to={`/new/`} className="notactive" activeClassName="active">
        Dodaj plik
      </Link>

      {children}
    </div>
  )
}
