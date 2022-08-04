import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './globalStyle'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee, faMagnifyingGlass,faLocationDot)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
