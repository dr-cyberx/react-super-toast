import { useToast, Toaster } from '../src/index'
import './App.css'

function App() {
  const { toast } = useToast()

  return (
    <div className=''>
      <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <button className='text-black text-2xl' onClick={() => {
          toast.success('Hello World', 5000)
          toast.default('Hello World', 5000)
          toast.error('Hello World', 5000)
          toast.info('Hello World', 5000)
          toast.chameleon('Hello World', 5000)
          toast.modern('Hello World', 5000)
          toast.modernDark('Hello World', 5000)
        }}>Click me</button>
      </div>
      <Toaster
        position="bottom-right"
        notification
        toastDefaults={
          {
            position: "bottom-center",
            size: "large",
            notification: true,
          }
        }
      />

    </div>
  )
}

export default App;
