import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
const Home = () => {
    const [title, settitle] = useState("")
    const [des, setdes] = useState("")
    const [loading, setloading] = useState(false)
    const [openToggel, setopenToggel] = useState(false)
    const [newTitle, setnewTitle] = useState('')
    const [newDes, setnewDes] = useState("")

    const [updatingId, setupdatingId] = useState('')

    const [todo, settodo] = useState([{
        title: '', des: '', 
        _id: ''        
    }])


    const getAllTodos = async() => {
       setloading(true)
       try {
           const res = await axios.get("http://localhost:3000/gettodo");
           setloading(false);
           settodo(res.data)
       } catch (err) {
           console.log(err);
           setloading(false);
           toast.error("Something went wrong!!");
       }
    }
    useEffect(() => {
     getAllTodos()
    }, [])
    
    const addTodo = async(e: any) => {
        setloading(true)
        e.preventDefault();
        if(title.length <= 3 || des.length <= 5){
            alert("Content is too small. Add some more details");
            setloading(false)
        }else{
            try {
                const res = await axios.post("http://localhost:3000/addtodo", {title, des});
                toast.success(res.data);
                setloading(false);
                getAllTodos()
                settitle('')
                setdes('')
            } catch (err) {
                console.log(err);
                setloading(false);
                toast.error("Something went wrong!!");
            }
        }
    }

    const deleteTodo = async(id: string) => {
        setloading(true)
        try {
            const res = await axios.post("http://localhost:3000/delete", {id});
            toast.success(res.data);
            setloading(false);
            getAllTodos()
        } catch (err) {
            console.log(err);
            setloading(false);
            toast.error("Something went wrong!!");
        }

    }
    const editTodo = async (id: string) => {
        setupdatingId(id)
        todo.map((elem) =>{
            if(elem._id === id){
               setnewTitle(elem.title)
                setnewDes(elem.des)
            }
        setopenToggel(true);
        })
    };
    const editTodofk = async () => {
        setloading(true);
        if (newTitle.length <= 3 || newDes.length <= 5) {
            toast.error("Content is too small. Add some more details.")
            setloading(false);
        } else {
            try {
                const res = await axios.put("http://localhost:3000/edit", { id: updatingId, title: newTitle, des: newDes });
                toast.success(res.data);
                setloading(false);
                getAllTodos();
                setopenToggel(false)
            } catch (err) {
                console.log(err);
                setloading(false);
                toast.error("Something went wrong!!");
            }
        }
    };
    function closePopup() {
        setopenToggel(false)
    }
    
    return (
        <>

            <div className="min-h-[100vh] min-w-[100vw] bg-neutral-900 flex justify-center items-center flex-col">
                <h1>Save your importent Todos</h1>
                <div className="form min-h-[80vh] w-full py-24">
                    <div className="max-w-[60vw] min-h-[380px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
                        <form className="text-white">
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-50" htmlFor="name"> Title </label>
                                <input value={title} onChange={(e) =>{settitle(e.target.value)}} placeholder="Your Name" className="w-full p-2 border-b-2 border-blue-400 bg-transparent outline-none focus:border-b-2 focus:border-blue-600" type="Title" />
                            </div>
                            <div className="mb-4">
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-50" htmlFor="message"> Description </label>
                                <textarea value={des} onChange={(e) =>{setdes(e.target.value)}}  placeholder="Enter Description here" className="w-full p-2 border-b-2 border-blue-400 bg-transparent outline-none focus:border-b-2 focus:border-blue-600" rows={4} name="message" id="message"></textarea>
                            </div>
                            <div className="mb-4">
                                <button disabled={loading ? true : false} onClick={addTodo} className={`w-full bg-blue-600 text-gray-700 font-semibold p-2 rounded ${loading ? 'cursor-not-allowed': 'cursor-pointer'} transition-all hover:bg-blue-500`} type="submit" >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="card w-[60vw] min-h-20 ">
                    {todo.length == 0 ? (
                        <div className="font-bold text-white text-6xl text-center">You don't have any todo Yet</div>
                    ) : (todo.map((i, index) => {
                        return <div key={index} className="w-full my-2 max-h-56 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24" ></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12" ></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                            <div className="z-10 font-extrabold text-white font-serif text-3xl">{String(i.title)}</div>
                            <div className="z-10 font-medium text-slate-100 font-serif text-base pr-20 pt-8">{String(i.des)}</div>
        
                            <div className="icons w-full flex justify-between px-20 mt-10">
                                <i className={`z-10 fa-solid fa-trash text-3xl text-red-600 hover:text-red-700 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => deleteTodo(String(i._id))}></i>
                                <i className={`z-10 fa-solid fa-pen-to-square text-3xl text-green-600 hover:text-green-700 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => editTodo(String(i._id))}></i>
                            </div>
                        </div>
                    }))}
                    {openToggel && <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="w-[100vw] h-[95vh] backdrop-blur-md my-auto mx-auto flex justify-center items-center">
                            <div className="absolute top-40 right-72 text-white"><i className="fa-solid fa-xmark cursor-pointer text-3xl" onClick={closePopup}></i></div>
                        <form className="min-w-[35vw] py-12 mx-auto ">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-100 ">Title</label>
                            <input value={newTitle} onChange={(e)=> {setnewTitle(e.target.value)}} type="email" id="email" className="bg-gray-600 text-gray-100 text-sm outline-none rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-100">Description</label>
                            <input value={newDes} onChange={(e)=> {setnewDes(e.target.value)}} type="textarea" id="password" className="bg-gray-600 text-gray-100 text-sm outline-none rounded-lg block w-full p-2.5" required />
                        </div>
                        
                            <button disabled={loading} type="button" className={`text-white bg-green-600 hover:bg-green-800 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`} onClick={editTodofk}>Edit Todo</button>
                        </form>

                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Home
