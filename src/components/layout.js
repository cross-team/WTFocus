import React from 'react'
import ReactDOM from 'react-dom'

import SEO from 'components/SEO'
import Theme from 'components/theme'

export default function Layout({ children, title }) {
  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  return (
    <Theme>
      <SEO title={title} />
      <main>{children}</main>
    </Theme>
  )
}
