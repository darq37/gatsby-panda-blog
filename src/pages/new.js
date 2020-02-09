import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <p> Dodaj Nowy post w formacie Markdown </p>
        <form enctype="multipart/form-data" action="/pages" method="post">
          <input id="addfile" type="file" />
        </form>
        <center><a href="/" class="myButton">Dodaj plik</a></center>
      </div>

    </Layout>
  )
  }
