import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'

import GlobalStyle from '../styles/global.style'
import theme from '../styles/theme.style'

const materialIconsCssUrl = 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'

const App = ({ Component, pageProps } : AppProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchIconsCssFiles = () => {
    // Href: https://stackoverflow.com/questions/10537039/how-to-determine-if-css-has-been-loaded/21147238
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = materialIconsCssUrl
    link.onload = () => {
      console.log('Loaded material icon fonts')
      setIsLoaded(true)
    }

    head.appendChild(link)
  }

  useEffect(fetchIconsCssFiles, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isLoaded={isLoaded} />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
