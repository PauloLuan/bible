import React from 'react'
import {
  Footer,
  FooterProps
} from '.'

export default {
  component: Footer,
  title: 'Footer'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FooterProps = {
    name: 'Paulo Luan'
  }

  return <Footer {...props} />
}