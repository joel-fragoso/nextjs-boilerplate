import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '../src/shared/store/theme/contexts/themeContext'

const Providers = ({ children }) => {
  return <ThemeProvider type="light">{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
