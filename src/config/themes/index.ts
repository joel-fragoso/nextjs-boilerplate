import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    primary: {
      light: '#7b80cc',
      main: '#5158bb',
      dark: '#3f45a2',
      contrastText: 'rgba(255, 255, 255, 0.7)',
    },
    secondary: {
      light: '#f17eb6',
      main: '#eb4b98',
      dark: '#dc1877',
      contrastText: 'rgba(255, 255, 255, 0.7)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
}

const darkTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    background: {
      default: '#303030',
      paper: '#616161',
    },
    primary: {
      light: '#7b80cc',
      main: '#5158bb',
      dark: '#3f45a2',
      contrastText: 'rgba(0, 0, 0, 0.6)',
    },
    secondary: {
      light: '#f17eb6',
      main: '#eb4b98',
      dark: '#dc1877',
      contrastText: 'rgba(0, 0, 0, 0.38)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.5)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
  },
}

export { defaultTheme, darkTheme }
