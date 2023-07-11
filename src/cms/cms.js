import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import HeaderTemplatePreview from './preview-templates/HeaderPreview'

CMS.init()

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('header', HeaderTemplatePreview)
