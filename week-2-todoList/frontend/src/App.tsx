
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home'
function App() {
  return (
    <>
    <Toaster position='top-right'></Toaster>
    <Home/>
    </>
  )
}

export default App
