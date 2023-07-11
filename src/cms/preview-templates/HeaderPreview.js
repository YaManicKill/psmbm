import React from 'react'
import PropTypes from 'prop-types'
import { HeaderTemplate } from '../../components/layout/Header'
import '../../css/tailwind.css'

const HeaderTemplatePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(['data']).toJS()

	if (data) {
		return <HeaderTemplate links={data.links} registration={data.registration} />
	} else {
		return <div>Loading...</div>
	}
}

HeaderTemplatePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
}

export default HeaderTemplatePreview
