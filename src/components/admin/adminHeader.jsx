import React from 'react';
import { AiOutlineOrderedList } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import AdminImg from '../../assests/admin.png'
import './admin.css'


function AdminHeader() {
    return (
        <div className="header_admin">
            <div className='admin_firstdiv'>
                <img src={AdminImg} width='50px' height='50px' className='adminImg' alt="" />
                <div>
                    <p>Talha Khan</p>
                    <p>Admin</p>
                </div>
            </div>
            <div>
                <Link to='/admin/orders' style={{color:'gray'}}><AiOutlineOrderedList size={20} /></Link>
            </div>
        </div>
    );
}

export default AdminHeader;