import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin_assets/assets.js'
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])
   const statusUpdate = async(event,orderId)=>{
    try{
         const response =   await axios.post(backendUrl+'/api/order/status',{orderId,status:event.target.value},{headers:{token}})
            console.log(response)
         if(response.data.success){
          await getOrders() 
         }
        }catch(error){
      console.log(error)
       toast.error(response.data.msg)
    }
   }

  const getOrders = async () => {
    if (!token) { return null };
    try {
      let res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (res.data.success) {
        setOrders(res.data.allOrder)
      } else {
        toast.error(res.data.msg)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getOrders()
  }, [token])
  
  return (
    <div>
      <h3>Orders Page </h3>
      <div>
        {
          orders.map((order, index) => {
            return (
              <div  key={order._id} className='grid grid-cols-1  sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3  items-start border border-gray-200  p-5 md:p-8 my-3 md:my-4 text-xs md:text-sm text-gray-700 ' >
                <img className='w-12' src={assets.parcel_icon} alt="" />
                <div>
                  <div>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return <p  className='py-0.5'  key={index}> {item.name} X {item.quantity}, <span> {item.size}</span> </p>
                      } else {
                        return <p className='py-0.5'  key={index}> {item.name} X {item.quantity}, <span> {item.size}</span>, </p>
                      }
                    }
                    )}
                  </div>
                  <p className='mt-3 mb-2 font-medium'>{order.address.firstname + ' ' + order.address.lastname}</p>
                  <div>
                    <p>{order.address.street + ', '}</p>
                    <p>{order.address.city + ", " + order.address.state + ', ' + order.address.country + ', ' + order.address.zipcode}</p>
                  </div>
                  <p>{order.address.phone}</p>
                </div>
                <div>
                  <p className='text-sm sm:text-[15px]'>Item: {order.items.length}</p>
                  <p className='mt-3'>Method: {order.paymentMethod} </p>
                  <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <p className='text-sm sm:text-[15px]'>RS:{order.amount}</p>
                {console.log(order.status)}
                <select  onChange={(event)=>statusUpdate(event,order._id)} value={order.status} className='p-2 font-semibold'>
                  <option value="order_placed"> Order Placed </option>
                  <option value="Packing"> Packing </option>
                  <option value="Shipped"> Shipped </option>
                  <option value="Out_For_Delivery"> Out for Delivery </option>
                  <option value="Delivered"> Delivered </option>
                </select>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Orders