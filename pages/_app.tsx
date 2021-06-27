import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global.style'

const App = ({ Component, pageProps } : AppProps) => (
  <>
    <GlobalStyle />

    <Component {...pageProps} />
  </>
)

export default App
