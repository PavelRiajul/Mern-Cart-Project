import React from 'react';
import CartList from '../component/CartList';
import AppNavBar from '../component/AppNavBar';

const CartListPage = () => {
    return (
        <div>
            <AppNavBar/>
            <CartList/>
        </div>
    );
};

export default CartListPage;