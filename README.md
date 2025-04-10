# 🚀 react-super-toast

> A lightweight and customizable toast notification library for React ⚡

## ✨ Features

- ⚛️ Built with React
- 🎨 Customizable styles (position, colors, duration)
- 🔄 Supports stacked and auto-dismiss toasts
- 🧠 Written in TypeScript with typings included
- 📦 Small bundle size (tree-shakable)

## 📦 Installation

```bash
npm install react-super-toast

or

yarn add react-super-toast
```

## ⚙️ config

```bash
// main.tsx or index.tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastProvider } from 'react-super-toast';

createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
```

```bash
import { useToast, Toaster } from 'react-super-toast';

function App() {
  const { toast } = useToast();

  return (
    <div className="app">
      <button onClick={() => toast.chameleon('Hello world!', 5000)}>
        Show Toast
      </button>

      {/* Place this near the root of your app layout */}
      <Toaster position="top-left" />
    </div>
  );
}

```

## 🔗 API

```bash
useToast()

Returns an object with toast functions:

    toast.default(message: string, duration?: number)

    toast.success(message: string, duration?: number)

    toast.error(message: string, duration?: number)

    toast.warning(message: string, duration?: number)

    toast.chameleon(message: string, duration?: number)

```

## 📍 Positioning

```bash

<Toaster position="top-right" />

other options:

    'top-left'

    'top-center'

    'top-right'

    'bottom-left'

    'bottom-center'

    'bottom-right'

```

##🙌 Contributing

> Feel free to open PRs or issues! Feedback and improvements are always welcome.
