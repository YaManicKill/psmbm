import React from 'react'
import ReactMarkdown from 'react-markdown'

import Heading from '../components/Heading'

export default ({ title, subheading, intro }) => (
	<section id="2023">
		<Heading>{title}</Heading>
		<p className="text-2xl lg:text-3xl mt-6 font-light">{subheading}</p>
		<ReactMarkdown
			children={intro}
			components={{
				p({ className, children, ...props }) {
					return (
						<p children={children} {...props} className="text-l lg:text-xl mt-6 font-light"></p>
					)
				},
			}}
		/>
	</section>
)
