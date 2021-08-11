import { Main } from '../Main'
import React from 'react'
import { Layout } from '.'

export default {
  component: Layout,
  title: 'Layout'
}

export const primary = () => {
  /* eslint-disable-next-line */
  return (
    <Layout>
      <Main />
    </Layout>
  )
}
