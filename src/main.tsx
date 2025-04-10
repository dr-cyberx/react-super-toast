import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import './styles/toast.css';

import { ToastProvider } from './index.ts'

createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <App />
  </ToastProvider>
  ,
)
