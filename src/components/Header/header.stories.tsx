import React from 'react'
import {
  Header,
  HeaderProps
} from '.'

export default {
  component: Header,
  title: 'Header'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HeaderProps = {
    name: 'Paulo Luan'
  }

  return <Header {...props} />
}