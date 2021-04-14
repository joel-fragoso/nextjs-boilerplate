import { createContext, FC, ReactNode, useReducer } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from '../../../../config/themes'
import { themeReducer } from './themeReducer'

export interface IThemeProps {
  type: string
}

export interface IThemeAction {
  type: 'toggleThemeMode'
}

export type IThemeDispatch = (action: IThemeAction) => void

interface IThemeProviderProps {
  children: ReactNode
}

const initialState = {
  type: 'light',
}

export const ThemeContext = createContext<
  { state: IThemeProps; dispatch: IThemeDispatch } | undefined
>(undefined)

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
}: IThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <StyledComponentsThemeProvider
        theme={state.type === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
