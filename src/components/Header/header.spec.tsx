import { render, screen } from 'utils/test-utils'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()
  })
})