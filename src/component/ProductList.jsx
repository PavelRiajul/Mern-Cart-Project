import React, { useEffect, useState } from 'react';
import { AddCartRequest, ProductListRequest } from '../APIRequest/APIRequest';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast';

const ProductList = () => {

    let [data,setData]=useState([])
    const [Loader, SetLoader]=useState("d-none");

    useEffect(()=>{
        (async()=>{
            SetLoader("")
        let res= await ProductListRequest();
        SetLoader("d-none")
        setData(res)
        })()
    },[])

    const AddCart = async (id)=>{
      SetLoader("")
      let msg = await AddCartRequest(id)
      SetLoader("d-none")
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
                        <img className='rounded-2' src={item['image']} alt="" />
                        <div className='card-body'>
                            <h6>{item['title']}</h6>
                            <button onClick={()=>AddCart(item['id'])} className='btn btn-success'>Add To Cart</button>
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

export default ProductList;