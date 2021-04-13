import 'styled-components'

interface ICommonColors {
  black: string
  white: string
}

interface ITypeText {
  primary: string
  secondary: string
  disabled: string
}

interface ITypeBackground {
  default: string
  paper: string
}

interface IPaletteColors {
  light: string
  main: string
  dark: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: ICommonColors
      background: ITypeBackground
      primary: IPaletteColors
      secondary: IPaletteColors
      text: ITypeText
    }
  }
}
