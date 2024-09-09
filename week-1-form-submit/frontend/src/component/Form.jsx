import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const Form = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [loading, setloading] = useState(false)
    const formSubmit = async (e) => {
        e.preventDefault();
        if(name.length<= 2 || name.length<= 2 || name.length<= 2){
            toast.error("All fields are required")
        }else{
        try {
            setloading(true)
            const response = await axios.post('http://localhost:3000/submit', { name, email, message })
            console.log(response)
            toast.success("Form submitted successfully")
            setloading(false)
            setname('')
            setemail('')
            setmessage('')
        } catch (error) {
            console.log(error)
            toast.error("Error, Something Went wrong")
        }
    }}
    return (
        <>
        <div className='min-h-[100vh] flex justify-center items-center bg-gray-400'>

     
            <div className="max-w-md mx-auto min-w-[40vw] relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                <h2 className="text-2xl text-sky-900 font-bold mb-6">Submit Your Form😉</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="name">Full Name</label>
                        <input value={name} onChange={(e) =>{setname(e.target.value)}} className="mt-1 p-2 w-full border rounded-md" type="text" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e) =>{setemail(e.target.value)}} className="mt-1 p-2 w-full border rounded-md" name="email" id="email" type="email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600" htmlFor="message">Message</label >
                        <textarea value={message} onChange={(e) =>{setmessage(e.target.value)}} className="mt-1 p-2 w-full border rounded-md" rows="3" name="message" id="message"></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button disabled={loading} className={`[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80 ${loading ? 'cursor-not-allowed': 'cursor-pointer'}`} onClick={formSubmit}>Submit Form</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}
export default Form
