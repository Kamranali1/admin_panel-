import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
const List = ({token}) => {
      
 const [list,setList]= useState([])
const currency = "RS"
 const fetchlist = async()=>{
  const response  = await axios.get(backendUrl+'/api/product/list')
  if(response.data.success){
    setList(response.data.product)
  }else{
    toast.error(response.data.msg)
  }
 }

useEffect(()=>{
   fetchlist()
},[])

 const remove=async(id)=>{
  const response = await axios.post(backendUrl+'/api/product/remove',{id},{headers:{token}})
   if(response.data.success){
    toast.success(response.data.msg)
      await fetchlist()
  }else{toast.error(response.data.msg)}
}

 return (
<> 
   <h1 className='mb-2 text-2xl font-bold'>All Product List</h1>
   
    <div className=' flex flex-col gap-2'>
     <div className=' hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr]  font-semibold bg-gray-100 px-2 py-1 gap-2 items-center text-sm '>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className='text-center '>Action</p> 
     </div>


   {
    list.map((item,index)=>{
      return(
        <div key={index} className='hover:shadow-md rounded-lg grid  grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_4fr_1fr_1fr_1fr] items-center border  px-2 py-1 gap-2 text-sm '   > 
            <img src={item.image[0]} className='w-20' alt="" />
            <p> {item.name}</p>
            <p>{item.category}</p>
            <p> {currency} {item.price}</p>
             <p  onClick={()=>remove(item._id)} className='text-right md:text-center text-lg cursor-pointer'>X</p>
        </div>
      )
    })
   }
        </div>
    </>
  )
}

export default List