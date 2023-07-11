import React from 'react'

const SplitView = ({ left, right, top }) => {
	return (
		<>
			<div className="container text-left mx-auto px-8 lg:flex">{top}</div>
			<div className="container text-left mx-auto px-8 lg:flex">
				<div className="lg:w-1/2">{left}</div>
				<div className="lg:w-1/2 lg:ml-5 pt-12 lg:pt-0">{right}</div>
			</div>
		</>
	)
}

export default SplitView
