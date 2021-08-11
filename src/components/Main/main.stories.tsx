import React from 'react'
import { Main, MainProps } from '.'

export default {
  component: Main,
  title: 'Main'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: MainProps = {
    testId: 'Paulo Luan'
  }

  return <Main {...props} />
}
