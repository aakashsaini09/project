import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
const Home = () => {
    const [title, settitle] = useState("")
    const [des, setdes] = useState("")
    const [loading, setloading] = useState(false)
    const [openToggel, setopenToggel] = useState(false)


    const [todo, settodo] = useState([{
        title: String, des: String, 
        _id: String        
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
        setopenToggel(true)
    };
    const editTodofk = async (id: string) => {
        setloading(true);
        if (title.length <= 3 || des.length <= 5) {
            toast.error("Content is too small. Add some more details.")
            setloading(false);
        } else {
            try {
                const res = await axios.put("http://localhost:3000/edittodo", { id, title, des });
                toast.success(res.data);
                setloading(false);
                getAllTodos();
                settitle(''); 
                setdes('');
            } catch (err) {
                console.log(err);
                setloading(false);
                toast.error("Something went wrong!!");
            }
        }
    };
    
    
    return (
        <>

            <div className="min-h-[100vh] min-w-[100vw] bg-neutral-900 flex justify-center items-center flex-col">
                <h1>Save your importent Todos</h1>
                <div className="form min-h-[80vh] w-full py-24">
                    <div className="max-w-[560px] min-h-[380px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4">
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
                <div className="card w-[60vw] min-h-48 h-auto ">
                    {todo.length == 0 ? (<div className="font-bold text-white text-6xl text-center">You don't have any todo Yet</div>) : (todo.map((i, index) => {
                        return <div key={index} className="w-full my-2 min-h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24" ></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12" ></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                            <div className="z-10 font-extrabold text-white font-serif text-3xl">{String(i.title)}</div>
                            <div className="z-10 font-normal text-slate-300 font-serif text-base">{String(i.des)}</div>
                            {/* <label className="relative text-[#008080] flex cursor-pointer items-center justify-center w-80" htmlFor={`tick-${i.title}`}>
                                <input className="peer appearance-none" id={`tick-${i.title}`} name="tick" type="checkbox" readOnly />
                                <span className="absolute left-12 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
                                <svg viewBox="0 0 69 89" className="absolute left-12 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]" fill="none" height="89" width="69" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1" strokeWidth="6px" stroke="#008080" pathLength="100" ></path>
                                </svg>
                                <p className="text-[1em] font-bold [user-select:none]">
                                    Completed
                                </p>
                            </label> */}
                            <div className="icons w-full flex justify-between px-20 mt-32">
                            <i className={`z-10 fa-solid fa-trash text-3xl text-red-600 hover:text-red-700 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => deleteTodo(String(i._id))}></i>
                            <i className={`z-10 fa-solid fa-pen-to-square text-3xl text-green-600 hover:text-green-700 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => editTodo(String(i._id))}></i>
                            </div>
                        </div>
                    }))}





                

<div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
    <div className="relative p-4 w-full max-w-2xl max-h-full">

       It's popup menu
    </div>
</div>
        



                </div>
            </div>
            {/* <label htmlFor="spiral" className="relative flex cursor-pointer items-center justify-center text-[#EC5800]" >
                        <input type="checkbox" name="spiral" id="spiral" className="peer appearance-none"/>
                        <span className="absolute left-12 top-9 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#EC5800]">
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="76" height="86" fill="none" viewBox="0 0 76 86" className="absolute left-12 top-9 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]" >
                            <path stroke="#EC5800"  pathLength="100"stroke-width="4px"  d="M65.988 12.645c-4.136-3.922-9.554-6.9-15.047-8.398C45.855 2.86 38.462-.12 33.096 1.797 26.002 4.331 20.525 11.961 15.6 17.193 2.02 31.623-6.386 59.79 12.101 74.58c8.711 6.97 18.19 9.184 29.043 9.798 24.117 1.365 28.693-3.588 32.542-27.643.772-4.83 3.15-16.094.7-20.995-4.678-9.354-22.35-11.08-31.143-7.698-9.911 3.812-18.558 14.775-20.295 25.193-1.45 8.707 5.447 10.548 12.947 10.848 6.772.27 10.148 1.421 10.148-5.949 0-5.412.09-7.166-2.1-11.547" ></path>
                        </svg>
                        <p className="text-[1em] font-semibold">{i.status == false ? 'Uncomplete' : 'Completed'}</p>
                    </label> */}
        </>
    )
}

export default Home
