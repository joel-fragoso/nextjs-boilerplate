import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider } from '../src/shared/store/theme/contexts/themeContext'
import { defaultTheme, darkTheme } from '../src/config/themes'

const themes = [defaultTheme, darkTheme]

const providerFn = ({ theme, children }) => {
  return (
    <ThemeProvider type="light">
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeProvider>
  )
}

const onThemeSwitch = ({ theme }) => {
  const parameters = {
    backgrounds: {
      default: theme.palette.background.default,
    },
  }

  return {
    parameters,
  }
}

const themingDecorator = withThemes(null, themes, { providerFn, onThemeSwitch })

addDecorator(themingDecorator)

export const parameters = {
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}
