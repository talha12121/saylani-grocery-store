import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminbottom from './adminbottom';
import AdminHeader from './adminHeader';

function Order() {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'admin') {
            navigate('/login')
        }
    }, [])
    return (
        <div className='admin_main'>
            <div className='admin_sub_main'>
                <Adminbottom name='' />
                <AdminHeader />
                <hr />
                <h2 className='order_heading'>Orders</h2>
                <div className='orders_itemslist'>
                    <div className='individual_order'>
                        <h2>Talha Khan</h2>
                        <div className='order_number_details'>
                            <p>Just Now</p>
                            <p>03333333333</p>
                        </div>
                        <div className='order_items'>
                            <h5>Items</h5>
                            <div>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                            </div>
                        </div>
                        <div className='order_total'>
                            <p>Total</p>
                            <p>$ 100</p>
                        </div>
                    </div>
                    <div className='individual_order'>
                        <h2>Talha Khan</h2>
                        <div className='order_number_details'>
                            <p>Just Now</p>
                            <p>03333333333</p>
                        </div>
                        <div className='order_items'>
                            <h5>Items</h5>
                            <div>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                            </div>
                        </div>
                        <div className='order_total'>
                            <p>Total</p>
                            <p>$ 100</p>
                        </div>
                    </div>
                    <div className='individual_order'>
                        <h2>Talha Khan</h2>
                        <div className='order_number_details'>
                            <p>Just Now</p>
                            <p>03333333333</p>
                        </div>
                        <div className='order_items'>
                            <h5>Items</h5>
                            <div>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                                <p>3 x apple</p>
                            </div>
                        </div>
                        <div className='order_total'>
                            <p>Total</p>
                            <p>$ 100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;