import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
