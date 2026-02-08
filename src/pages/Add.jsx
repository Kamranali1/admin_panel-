import React, { use, useEffect, useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
const Add = () => {

     const [name,setName] = useState('')
     const [description,setDescription] = useState('')
     const [category ,setCategory] = useState('')
     const  [subCategory,setSubCategory] = useState('')
     const [price,setPrice] = useState(0)
     const [sizes,setSizes] = useState([])
     const [bestseller ,setBestseller] = useState(false)
  
     const[image1,setImage1] = useState()   
     const[image2,setImage2] = useState()
     const[image3,setImage3] = useState()
     const[image4,setImage4] = useState()

     

     const sizesadd = (value)=>{
         setSizes(prev=>  prev.includes(value)? prev.filter(item=>item != value) :  [...prev,value])
       }

     const onSubmitHandler =(e)=>{
        e.preventDefault()
         let formData = new FormData()
         formData.append("name",name)
         formData.append("description",description)
         formData.append('category',category)
         formData.append('subCategory',subCategory)
         formData.append('price',price)
         formData.append('sizes',JSON.stringify(sizes))
         formData.append('bestseller',bestseller)

         console.log(formData)
     }

  return (
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <div className='w-full' >
        <p>Upload Images</p>
        <div className='flex gap-4 py-2'>
          <div>
            <label htmlFor="image1">
              <img className='w-20' src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' className='hidden' />
            </label>
          </div>
          <div>
            <label htmlFor="image2">
              <img className='w-20'src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
              <input type="file" id='image2' onChange={(e)=>setImage2(e.target.files[0])} className='hidden' />
            </label>
          </div>
          <div>
            <label htmlFor="image3">
              <img className='w-20'src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
              <input type="file" id='image3' className='hidden'  onChange={(e)=>setImage3(e.target.files[0])}/>
            </label>
          </div>
          <div>
            <label htmlFor="image4">
              <img className='w-20' src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" />
              <input type="file" id='image4' className='hidden'onChange={(e)=>setImage4(e.target.files[0])} />
            </label>
          </div>

        </div>
      </div>
      
       <div className='flex flex-col  gap-5 ' > 

    
      <div className='w-full' >
        <p>Name</p>
        <input  onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-[500px] px-3 py-2 border' name="" id="" />
      </div>
      <div >
        <p>Description</p>
         <textarea  onChange={(e)=>setDescription(e.target.value)} value={description}  className='w-[500px] px-3 py-2 border' placeholder='Description' rows="2" cols="3" name="" id=""></textarea>
      </div>

        </div>
      <div className='flex flex-col mt-4 sm:flex-row sm:gap-8 gap-2 ' >
        <div>
          <p className='mb-2'>Prodcut Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} className='border px-3 py-2 ' name="" id="">
            <option value="Men"> Men</option>
            <option value="Women"> Women</option>
            <option value="Kids"> Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select className="border px-3 py-2 " onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} name="" id="">
            <option value="Topwear"> Topwear</option>
            <option value="Bottomwear"> Bottomwear </option>
            <option value="Winterwear"> Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Price</p>
          <input onChange={(e)=>setPrice(Number(e.target.value))} value={price} className='border px-3 py-2 ' type="number" placeholder='25' />
        </div>
      </div>

      <div className='mt-2'>
        <p>Product sizes</p>
        <div className='flex flex-row gap-3 mt-2'>
          <div onClick={()=>sizesadd("S")} className={`${sizes.includes("S")?`bg-pink-100 shadow-inner` :`bg-gray-300 ` } text-gray-800 px-3 py-2`}>
            <p>S</p>
          </div>
          <div onClick={()=>sizesadd("M")} className={`${sizes.includes("M")?`bg-pink-100 shadow-inner` :`bg-gray-300 ` } text-gray-800 px-3 py-2`}>
            <p>M</p>
          </div>
          <div onClick={()=>sizesadd("L")} className={`${sizes.includes("L")?`bg-pink-100 shadow-inner` :`bg-gray-300 ` } text-gray-800 px-3 py-2`} > 
            <p>L</p>
          </div>
          <div onClick={()=>sizesadd("XL")} className={`${sizes.includes("XL")?`bg-pink-100 shadow-inner` :`bg-gray-300 ` } text-gray-800 px-3 py-2`}>
            <p>XL</p>
          </div>
          <div  onClick={()=>sizesadd("XXL")} className={`${sizes.includes("XXL")?`bg-pink-100 shadow-inner` :`bg-gray-300 ` } text-gray-800 px-3 py-2`} >
            <p>XXL</p>
          </div>
        </div>
      </div>

             <div className='flex gap-3 mt-5'>
              <input type="CheckBox" onChange={(e)=>setBestseller(e.target.checked)} checked={bestseller} />
                <p>Add to best seller </p>
         </div>



       
     
       <button className='bg-black text-white px-5 py-2 mt-3 ' >Add</button>
          
    </form>
  ) 
}
export default Add