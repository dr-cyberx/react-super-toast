import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import './styles/toast.css';

import { ToastProvider } from './index.ts'

createRoot(document.getElementById('root')!).render(
  <ToastProvider
    toastDefaults={{
      position: "top-left",
      size: "medium",
      notification: true,
      styleOverrides: {
        background: "#1E40AF",
        color: "#fff",
        border: "1px solid #93C5FD",
      },
    }}
  >
    <App />
  </ToastProvider>
  ,
)
