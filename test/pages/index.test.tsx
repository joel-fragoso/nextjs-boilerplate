import React from 'react'
import { render, fireEvent, screen } from '../testUtils'
import Home from '../../pages/index'

describe('Home page', () => {
  it('should be able to matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be able to click in button', () => {
    render(<Home />, {})
    const button = screen.getByRole('button', { name: 'Change Theme Mode' })
    fireEvent.click(button)
    expect(button).toBeDefined()
  })
})
