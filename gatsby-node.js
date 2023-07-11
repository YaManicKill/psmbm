const path = require('path')

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			allFile(filter: { sourceInstanceName: { eq: "pages" }, absolutePath: { regex: "/md$/" } }) {
				edges {
					node {
						sourceInstanceName
						absolutePath
						childMarkdownRemark {
							id
							frontmatter {
								templateKey
								slug
							}
						}
					}
				}
			}
		}
	`)
	data.allFile.edges.forEach((edge) => {
		const id = edge.node.childMarkdownRemark.id
		actions.createPage({
			path: edge.node.childMarkdownRemark.frontmatter.slug,
			component: path.resolve(
				`src/templates/${String(edge.node.childMarkdownRemark.frontmatter.templateKey)}.js`,
			),
			// additional data can be passed via context
			context: {
				id,
			},
		})
	})
}
