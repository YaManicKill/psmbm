import React from 'react'

import Heading from '../components/Heading'
import Markdown from '../components/Markdown'

export default ({ title, subheading, content }) => (
	<section id="2023">
		<Heading>{title}</Heading>
		<p className="text-2xl lg:text-3xl mt-6 font-light">{subheading}</p>
		<Markdown children={content} />
	</section>
)
