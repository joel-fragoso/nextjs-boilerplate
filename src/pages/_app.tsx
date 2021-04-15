import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '../shared/store/theme/contexts/themeContext'
import GlobalStyles from '../shared/styles/GlobalStyles'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider type={pageProps.type}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
