import { render, screen } from 'utils/test-utils'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument()
  })
})