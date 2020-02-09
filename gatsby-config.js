module.exports = {
  pathPrefix: "/gatsby-panda-blog",
  siteMetadata: {
    title: `A blog Page about Pandas!`,
    author: `Dominik Żmudziak`,
    description: "Blog-post single page application",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/panda-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `PandaBase`,
        collection: [`Posts`],
        connectionString: `mongodb+srv://darq37:ijiwyki1@pandacluster-jfmxq.mongodb.net/test?retryWrites=true&w=majority`,
        //map: { Posts: { content: `text/markdown` } }
      },
    },
  ],
}
