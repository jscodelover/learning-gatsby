/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

//require(dotenv).config();

module.exports = {
  siteMetadata: {
    title: "Learning Gatsby",
    description: "Creating website to learn gatsby",
    author: "@jscodelover",
    data: ["data 1", "data 2", "data 3"],
    person: { firstname: "manisha", lastname: "basra" },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gmjrsdk40ris`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //process.env.accessToken
        accessToken: "x_9x9kTtOA0Y_k53hOCmzvE9wlhKy35ndKqgq8Wmg1M",
      },
    },
  ],
}
