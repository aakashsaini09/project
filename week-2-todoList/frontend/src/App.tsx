
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home'
function App() {
  return (
    <>
    <Toaster position='top-right bottom-0'></Toaster>
    <Home/>
    </>
  )
}

export default App
