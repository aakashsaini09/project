import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth'
import { redirect } from 'next/navigation'
const Navbar = async() => {
    const session = await auth()
  return (
    <header className='px-5 py-2 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center text-black'>
            <Link href="/">
                <Image src='/YC.jpg' alt='logo' width={50} height={40}/>
            </Link>
            <div className='flex items-center gap-10 font-medium'>
            {session && session.user ? (
                <>
                    <Link href='/startup/create'><span>Create</span></Link>
                    <form action={async() => {
                        "use server";
                        await signOut({ redirectTo: '/' })
                    }}><button type='submit'>Logout</button> </form>
                    {/* @ts-ignore */}
                    <Link className='mr-10' href={`/user/${session?.id}`}> <span>{session?.user?.name}</span>  </Link>
                </> ):  (
                   <form action={async() => { 
                    "use server";
                    await signIn('github')}}>
                    <button type='submit'>Login</button>
                   </form>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
