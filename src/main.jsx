import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css
import './index.css'
// router
import { RouterProvider } from 'react-router-dom'
import routerPath from './ReactRouter/router'
// 






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerPath}></RouterProvider>
  </StrictMode>,
)