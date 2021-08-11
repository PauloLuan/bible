import React from 'react'
import {
  Seo,
  SeoProps
} from '.'

export default {
  component: Seo,
  title: 'Seo'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SeoProps = {
    name: 'Paulo Luan'
  }

  return <Seo {...props} />
}