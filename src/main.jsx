import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/normalize.css'
import './assets/style/reset.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
