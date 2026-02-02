import React from 'react'
import Layout from '../../components/layout/Layout'
import Heading from '../../components/Heading'

const TeamSuggestionsPage = () => {
	return (
		<Layout>
			<div className="container mx-auto px-8 pt-10">
				<Heading>Suggestions Box</Heading>
				<p className="text-l lg:text-xl mt-6 font-light">
					Have an idea or suggestion for the core team? Share it below.
				</p>
				<form className="mt-8 pb-8 mb-4" data-netlify="true" name="suggestion">
					<input type="hidden" name="form-name" value="suggestion" />
					<div className="mb-4">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="name"
							type="text"
							placeholder="Your Name (optional)"
						/>
					</div>
					<div className="mb-4">
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="suggestion"
							placeholder="Your suggestion"
							rows={8}
							required></textarea>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-primary-default hover:bg-primary-darker text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit">
							Submit Suggestion
						</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default TeamSuggestionsPage
