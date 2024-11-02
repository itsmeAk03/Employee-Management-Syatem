import React, { useState } from 'react'

const Login = () => {

  //useState is a way to manage changing data in your React components
  //abhi to initially empty string h
  //email variable hai setemail se change krsakte usko
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //2 way binding
  //this is a function jo e as an arg leraha
  //aur ye e object hai warna prevenDefault ko kaise access karege
  const submitHandler = (e)=>{
    e.preventDefault() //by default page refresh hojata h jab form submit hota h isliye isse wo hatt jaaega  
      console.log("Email is :",email)
      console.log("Password is :",password)

      //ab likhdiye ho submit ke baad khaali bhi to krna hai input box ko 
      setEmail('')
      setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{  //e as a para pass kar raha
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                /*The onChange event triggers.
                The function captures the new value of the input using e.target.value.
                It then updates the email state with that new value using setEmail.
                Since the value of the input is linked to the email state, the input field will automatically    show            the updated value. */
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  // console.log(e.target.value)  //e se event listen hoga , e.target se konsa element chalra i.e   input , e.target.value se kya kya value likhrahe pata lagega
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400'  type="email" placeholder='Enter Your email'
                />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Your password'
                />
                <button  className='mt-5 text-white outline-none  border-none bg-emerald-600 py-3 px-5 rounded-full  placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login