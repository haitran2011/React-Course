import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/bootstrap.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.Suspense fallback={<>Loading ...</>}>
      <App />
    </React.Suspense>
  </BrowserRouter>
)
