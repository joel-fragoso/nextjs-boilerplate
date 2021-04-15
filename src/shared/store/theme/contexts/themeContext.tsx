import { createContext, FC, ReactNode, useEffect, useReducer } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import Cookie from 'js-cookie'
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
  type: string
}

const initialState = {
  type: 'light',
}

export const ThemeContext = createContext<
  { state: IThemeProps; dispatch: IThemeDispatch } | undefined
>(undefined)

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  type,
}: IThemeProviderProps) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    type ? { type } : initialState
  )

  useEffect(() => {
    Cookie.set('type', String(state.type))
  }, [state.type])

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
