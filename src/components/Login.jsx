import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
    const [email,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    
 const onSubmitHandler = async (e)=>{
    try{
        e.preventDefault()
        let response = await axios.post(backendUrl+"/api/user/admin",{email,password})
         if(response.data.success){
            setToken(response.data.token)
         }else{
            toast.error(response.data.msg)
         }
    }catch(error){
        console.log(error.message)
    }
 }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md' > 
            <h1 className='text-2xl font-bold mb-4 '>Admin Panel</h1>
            <form onSubmit={onSubmitHandler}  >
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium'>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full rounded-md px-3 py-2 border border-gray-300 outline-none '  type="email" placeholder='example@forever.com' required />
                </div >
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium' >Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full  rounded-md px-3 py-2 border border-gray-300 outline-none' type="Password" placeholder='********' required />
                </div>
           <button type='submit' className='bg-black text-white mt-2 rounded-md  w-full px-4 py-2  ' > Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login