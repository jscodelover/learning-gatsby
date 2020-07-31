const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/product/${product.slug}`,
      component: path.resolve(`src/template/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
