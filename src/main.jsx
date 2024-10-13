import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Masonry from './components/Masonry'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Masonry/>
  </StrictMode>,
)
