import { render, screen } from 'utils/test-utils'

import { Seo } from '.'

describe('<Seo />', () => {
  it('should render the heading', () => {
    render(<Seo />)

    expect(screen.getByRole('heading', { name: /Seo/i })).toBeInTheDocument()
  })
})