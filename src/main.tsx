import './styles/toast.css';
import { createRoot } from 'react-dom/client'
import { ToastProvider } from './index.ts'
import './index.css'
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <App />
  </ToastProvider>
  ,
)
