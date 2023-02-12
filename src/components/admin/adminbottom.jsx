import React from 'react';
import './admin.css'
import { AiFillHome } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom';

function Adminbottom({ name }) {
    return (
        <div className='bottom_navigator'>
            <Link to={'/admin'} style={{ textDecoration: 'none',color:'gray' }}><AiFillHome size={28} className={`bottom_icons ${name === 'home' && 'active_admin'}`} /></Link>
            <Link to={'/admin/additem'} style={{ textDecoration: 'none',color:'gray' }}><IoMdAddCircleOutline size={28} className={`bottom_icons ${name === 'additem' && 'active_admin'}`} /></Link>
            <Link to={'/admin/account'} style={{ textDecoration: 'none',color:'gray' }}><MdAccountCircle size={28} className={`bottom_icons ${name === 'account' && 'active_admin'}`} /></Link>
        </div>
    );
}

export default Adminbottom;