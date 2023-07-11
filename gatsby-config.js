const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [tailwindcss('tailwind.config.js'), autoprefixer],
			},
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				tailwind: true,
				purgeOnly: [`src/css/tailwind.css`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `global`,
				path: `${__dirname}/src/global/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
	],
}
