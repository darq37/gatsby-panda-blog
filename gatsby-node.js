const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(`
    query {
      allMongodbPandaBasePosts {
        edges {
          node {
            id
            title
            content
            date
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
        title: node.title,
        id: node.id,
        date: node.date,
        content: node.content,
      },
    })
  })
}