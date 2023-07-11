import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Markdown from '../components/Markdown'
import Layout from '../components/layout/Layout'

import BM2023 from '../sections/2023'
import SplitView from '../components/SplitView'
import Contact from '../sections/contact'
import Heading from '../components/Heading'

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<SplitView
				left={
					<div className="mt-5">
						<BM2023
							title={frontmatter.main?.title}
							subheading={frontmatter.main?.subheading}
							content={frontmatter.main?.content}></BM2023>
					</div>
				}
				right={
					<div className="mt-5">
						<Heading>{frontmatter.about?.title}</Heading>
						<Markdown children={frontmatter.about?.content} />
						<div className="mt-5" id="contact">
							<Contact></Contact>
						</div>
					</div>
				}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				slug
				main {
					title
					subheading
					content
				}
				about {
					title
					content
				}
			}
		}
	}
`
