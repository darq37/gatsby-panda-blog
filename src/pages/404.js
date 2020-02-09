import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
      <p> Przykro mi, nie zaimplementowano jeszcze tej funkcji </p>
      <img src={require('../images/sad.jpg')}  alt="Sad Panda"/>
      <Link to="/">Powrót na stronę główną</Link>
      </div>
    </Layout>
  )
}
