import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastWrapper } from './library/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastWrapper>
      <App />
    </ToastWrapper>
  </StrictMode>,
)
