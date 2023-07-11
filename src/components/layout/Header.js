import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LOGO from '../../images/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const HeaderTemplate = ({ links, registration }) => {
	return (
		<header className="sticky top-0 bg-white shadow">
			<div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
				<a href="/">
					<div className="flex items-center">
						<img src={LOGO} className="h-12 sm:h-16"></img>
					</div>
				</a>
				<div className="flex mt-4 sm:mt-0 items-center">
					{links.map((link) => {
						const El = link?.url?.startsWith('#') ? AnchorLink : 'a'
						return (
							<El className="px-4" href={link?.url} key={link?.name}>
								{link?.name}
							</El>
						)
					})}
					{registration === 'on' ? (
						<a
							href="/register"
							className="bg-primary-default hover:bg-primary-darker text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Register
						</a>
					) : null}
				</div>
			</div>
		</header>
	)
}

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: { eq: "header" }) {
				name
				id
				absolutePath
				childMarkdownRemark {
					id
					frontmatter {
						links {
							name
							url
						}
						registration
					}
				}
			}
		}
	`)
	const { links, registration } = data?.file?.childMarkdownRemark?.frontmatter
	return <HeaderTemplate links={links} registration={registration} />
}

export default Header
