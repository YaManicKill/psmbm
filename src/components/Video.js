import React from 'react'

const Video = ({ poster, src }) => {
	return (
		<video controls poster={poster} preload="metadata" className="w-full">
			<source src={src} type="video/mp4" />
		</video>
	)
}

export default Video
