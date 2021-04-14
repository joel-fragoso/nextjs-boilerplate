import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '../src/shared/store/theme/contexts/themeContext'
import GlobalStyles from '../src/shared/styles/GlobalStyles'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
