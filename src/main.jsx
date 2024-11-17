import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import './styles/bootstrap.css'
import './styles/index.css'

// store
import { stores } from './redux/stores.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={stores}>
    <BrowserRouter>
      <React.Suspense fallback={<>Loading ...</>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider>
)
