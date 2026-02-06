import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2  '>
        <div className='flex flex-col  gap-4 pt-16 pl-[20%] text-[15px]'>
            <NavLink  to='/add' className="flex items-center gap-4 border px-3 py-2 border-gray-500 border-r-0" >
                   <img className='w-5 h-5' src={assets.add_icon} alt="" />
                   <p className='hidden sm:block'>Add items</p>
            </NavLink>
               <NavLink to='list'  className="flex items-center gap-4 border px-3 py-2 border-gray-500 border-r-0" >
                   <img className='w-5 h-5' src={assets.order_icon} alt="" />
                   <p className='hidden sm:block'>List items</p>
            </NavLink>
               <NavLink to='/orders'  className="flex items-center gap-4 border px-3 py-2 border-gray-500 border-r-0" >
                   <img className='w-5 h-5' src={assets.order_icon} alt="" />
                   <p className='hidden sm:block'>Orders </p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar