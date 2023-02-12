import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'

function UserBottom({name}) {
    return (
        <div className='bottom_navigator'>
            <Link to={'/user'} style={{ textDecoration: 'none', color: 'gray' }}><AiFillHome size={28} className={`bottom_icons ${name === 'home' && 'active_admin'}`} /></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'gray' }}><BsFillCartFill size={28} className={`bottom_icons ${name === 'additem' && 'active_admin'}`} /></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'gray' }}><MdAccountCircle size={28} className={`bottom_icons ${name === 'account' && 'active_admin'}`} /></Link>
        </div>
    );
}

export default UserBottom;