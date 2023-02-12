import React, { useEffect } from 'react';
import Adminbottom from './adminbottom';
import AdminHeader from './adminHeader';
import AdminImg from '../../assests/admin.png'
import { useNavigate } from 'react-router-dom';

function AdminAccount() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'admin') {
            navigate('/login')
        }
    }, [])
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }
    return (

        <div className='admin_main'>
            <div className='admin_sub_main'>
                <Adminbottom name='account' />
                <AdminHeader />
                <hr />
                <div className='admin_account_img'>
                    <img src={AdminImg} width='100%' />
                </div>
                <p className='admin_account_name'>Talha Khan</p>
                <div className='admin_logout_div'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAccount;