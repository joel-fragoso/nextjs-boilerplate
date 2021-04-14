import { useContext } from 'react'
import {
  IThemeDispatch,
  IThemeProps,
  ThemeContext,
} from '../contexts/themeContext'

export function useTheme(): { state: IThemeProps; dispatch: IThemeDispatch } {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
