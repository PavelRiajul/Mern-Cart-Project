import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from './FullScreenLoader';
import { OTPVerifyRequest, UserLoginRequest } from '../APIRequest/APIRequest';
import { GetEmail } from '../Utility/TokenHelper';

const OTPForm = () => {
    
    const [FromValue, SetFormValue]=useState({UserEmail:GetEmail(),OTP:""});
    const [Loader, SetLoader]=useState("d-none");
    const navigate = useNavigate()
    const InputOnChange=(key,value)=>{
        SetFormValue(
            FromValue=>({
                ...FromValue,
                [key]:value
            })
        )
    }
    const submitForm = async () =>{
       if(FromValue.OTP.length===0){
        toast.error("OTP code Required ")
       }
       else{
        SetLoader("")
     let msg =   await  OTPVerifyRequest(FromValue);
     SetLoader("d-none")
     if(msg==="success"){
        toast.success("Request Successful");
        window.location.href="/"
     }
     else{
        toast.error("Request Fail ! Try Again")
     }
       }
    }
    return (
        <>
        <div className='container mt-5'>
    <div className='row justify-content-center'>
       <div className='col-md-4'>
         <div className='card p-5'>
            <h3>OTP Verification</h3>
            <input value={FromValue.OTP} onChange={(e)=>{InputOnChange('OTP',e.target.
   value)}} type="email"className='form-control' placeholder='OTP Code' />
            <button onClick={submitForm} className='btn w-100 my-2 btn-primary'>Next</button>
         </div>
       </div>
    </div>
    <Toaster position="bottom-center"/>
    </div>
    <FullScreenLoader visibility={Loader}/>
        </>
         
        
         
    );
};

export default OTPForm;