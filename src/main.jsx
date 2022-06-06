import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import  GlobalStyle  from './styles/global'
import theme from './styles/theme'
import App from './pages/App'
import { Profile } from './pages/Profile'
import { Preview } from './pages/Preview'
import { CreateMovie } from './pages/CreateMovie'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < GlobalStyle />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
)
