import React from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown = ({ children }) => (
	<ReactMarkdown
		children={children}
		components={{
			p({ className, children, ...props }) {
				return <p children={children} {...props} className="text-l lg:text-xl mt-6 font-light"></p>
			},
			img({ ...props }) {
				return <img {...props} className="p-5 pr-10 lg:p-10" />
			},
		}}
	/>
)

export default Markdown
