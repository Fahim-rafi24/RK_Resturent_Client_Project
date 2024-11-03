import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex justify-center text-4xl items-center w-full h-[100vh]'>Welcome Here</div>
  </StrictMode>,
)