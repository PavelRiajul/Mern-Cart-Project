import React from 'react';
import { GetToken } from './Utility/TokenHelper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import CartListPage from './Pages/CartListPage';
import UserLoginPage from './Pages/UserLoginPage';
import OTPPage from './Pages/OTPPage';

const App = () => {
    if(GetToken()){
        return(
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProductPage/>}/>
                <Route path='/cart' element={<CartListPage/>}/>
              </Routes>
            </BrowserRouter>
        )
    }
    else{
        return(
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProductPage/>}/>
                <Route path='/login' element={<UserLoginPage/>}/>
                <Route path='/otp' element={<OTPPage/>}/>
              </Routes>
           </BrowserRouter>
        )
    }
};

export default App;