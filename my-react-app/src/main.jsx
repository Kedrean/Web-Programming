import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './SPA.css'
import SPA from './SPA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SPA />
  </StrictMode>,
)
