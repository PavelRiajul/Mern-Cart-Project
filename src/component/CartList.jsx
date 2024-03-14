import React, { useEffect, useState } from 'react';
import { AddCartRequest, CartListRequest, ProductListRequest, RemoveCartRequest } from '../APIRequest/APIRequest';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast';


const CartList = () => {
    let [data,setData]=useState([])
  const [Loader, SetLoader]=useState("d-none");
  let [refresh,setRefresh]=useState(0)


  useEffect(()=>{
      (async()=>{
          SetLoader("")
      let res= await CartListRequest();
      SetLoader("d-none")
      setData(res)
      })()
  },[refresh])


  const RemoveCart = async (id)=>{
    SetLoader("")
    let msg = await RemoveCartRequest(id)
    setRefresh(refresh+1)
    if(msg==='success'){
        toast.success("Request Success")
    }else{
      toast.error("Request Fail")
    }
  }
  return (
      <>
      <div className='container'>
         <div className='row'>
           {
              data.map((item,i)=>{
                return(
                  <div className='col-md-3 p-2'>
                   <div className='card'>
                      <img className='rounded-2' src={item['product']['image']} alt="" />
                      <div className='card-body'>
                          <h6>{item['product']['title']}</h6>
                          <button onClick={()=>RemoveCart(item['product']['id'])} className='btn btn-danger'>Remove</button>
                      </div>
                   </div>
                  </div>
                )
              })
           }
         </div>
      </div>
           <FullScreenLoader visibility={Loader}/>
           <Toaster position="bottom-center"/>
      </>
  );
};

export default CartList;