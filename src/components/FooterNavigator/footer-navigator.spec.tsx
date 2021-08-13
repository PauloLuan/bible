import { render, screen } from 'utils/test-utils'

import { FooterNavigator } from '.'

describe('<FooterNavigator />', () => {
  it('should render the heading', () => {
    render(<FooterNavigator />)

    expect(screen.getByRole('heading', { name: /FooterNavigator/i })).toBeInTheDocument()
  })
})