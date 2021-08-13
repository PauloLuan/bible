import React from 'react'
import {
  FooterNavigator,
  FooterNavigatorProps
} from '.'

export default {
  component: FooterNavigator,
  title: 'FooterNavigator'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FooterNavigatorProps = {
    name: 'Paulo Luan'
  }

  return <FooterNavigator {...props} />
}