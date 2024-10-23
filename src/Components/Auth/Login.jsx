import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white'  type="email" placeholder='Enter Your email'/>
                <input  className='text-black outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-white' type="password" placeholder='Enter Your password'/>
                <button  className='text-white outline-none  border-none bg-emerald-600 py-3 px-5 rounded-full mt-5 placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login