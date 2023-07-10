const path = require('path')

exports.createPages = async function ({ actions, graphql }) {
  const {data} = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              templateKey
            }
          }
        }
      }
    }
  `)
  console.log("TEST2")
  console.log({data})
  data.allMarkdownRemark.edges.forEach(edge => {
    const id = edge.node.id
    console.log(edge)
    actions.createPage({
      path: edge.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}