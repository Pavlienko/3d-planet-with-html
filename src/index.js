import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<span>loading...</span>}>
    <App />
  </Suspense>,
)