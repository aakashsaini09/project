import { Toaster } from 'react-hot-toast'
import './App.css'
import Form from './component/Form'

function App() {
 
  return (
    <>
    <Toaster position='top-right'></Toaster>
  {/* <div className='min-h-[100vh] flex justify-center items-center'> */}
      <Form/>
  {/* </div> */}
    </>
  )
}

export default App
