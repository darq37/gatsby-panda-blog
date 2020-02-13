const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allMongodbPandaBasePosts {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allMongodbPandaBasePosts.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
