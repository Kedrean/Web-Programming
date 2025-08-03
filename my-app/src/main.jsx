import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Calc.css'
import GradeCalc from './Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GradeCalc />
  </StrictMode>,
)
