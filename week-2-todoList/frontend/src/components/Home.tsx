import { useState } from "react"

const Home = () => {
    const [todo, settodo] = useState([
        {
            title: "Going gy",
            des: "Have to start gym from 2024 feb",
            status: false
        },
        {
            title: "Going gymf",
            des: "Have to start gym from 2024 feb",
            status: true
        },
        {
            title: "Going gyms",
            des: "Have to start gym from 2024 feb",
            status: false
        },
        {
            title: "Going gymsf",
            des: "Have to start gym from 2024 feb Have to start gym from 2024 feb Have to start gym from 2024 feb Have to start gym from 2024 feb",
            status: true
        },
        
    ])
  return (
    <>
   
      <div className="min-h-[100vh] min-w-[100vw] bg-neutral-900 flex justify-center items-center flex-col">
        <h1>Save your importent Todos</h1>
        <div className="card w-[60vw] min-h-48 h-auto ">
            {todo.map((i) => {
                return <div key={i.title} className="w-full my-2 min-h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                         <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24" ></div>
                        <div  className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12" ></div>
                        <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                        <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                    <div className="z-10 font-extrabold text-white font-serif text-3xl">{i.title}</div>
                    <div className="z-10 font-normal text-slate-300 font-serif text-base">{i.des}</div>
                    <label className="relative text-[#008080] flex cursor-pointer items-center justify-center w-80" htmlFor={`tick-${i.title}`}>
                        <input className="peer appearance-none" id={`tick-${i.title}`} name="tick" type="checkbox" checked={i.status}  readOnly  />
                        <span className="absolute left-12 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
                        <svg viewBox="0 0 69 89" className="absolute left-12 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]" fill="none" height="89" width="69" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1" stroke-width="6px" stroke="#008080" pathLength="100" ></path>
                        </svg>
                        <p className="text-[1em] font-bold [user-select:none]">
                        {i.status == false ? 'Uncomplete' : 'Completed'}
                        </p>
                    </label>

                </div>
            })}
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
