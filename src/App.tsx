import { useToast, Toaster } from '../src/index'
import './App.css'

function App() {
  const { toast } = useToast()

  return (
    <div className=''>
      <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <button className='text-black text-2xl' onClick={() => toast.chameleon('Hello world', 5000)}>Click me</button>
      </div>
      <Toaster position='top-left' />

    </div>
  )
}

export default App;
