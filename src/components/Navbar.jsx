import React from 'react'
import {assets} from "../assets/admin_assets/assets"
const Navbar = ({setToken}) => {
   const onClickHandler = ()=>{
     setToken('')
  }
  return (
    <div className='flex px-[4%] py-2  justify-between'>
         <img className='w-[max(10%,80px)] ' src={assets.logo} alt="" />
        <button onClick={onClickHandler} className='bg-gray-500 text-white px-6 py-2 rounded-full ' >Logout </button>
    </div>
  )
}

export default Navbar