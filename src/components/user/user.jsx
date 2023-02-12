import React, { useEffect, useState } from 'react';
import './user.css'
import UserBottom from './userBottom';
import Grocery from '../../assests/Grocery.png'
import { getDatabase, ref, child, get } from "firebase/database";
import { RiAddFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';


function User() {

    const [data, setData] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'user') {
            navigate('/login')
        }
        const dbRef = ref(getDatabase());
        get(child(dbRef, `items`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(Object.values(snapshot.val()))
                setData(Object.values(snapshot.val()))
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    return (
        <div className='admin_main'>
            <div className='admin_sub_main'>
                <UserBottom name='home' />
                <div>
                    <h2>Saylani Welfare</h2>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'center', marginBottom: '10px' }} >
                        <img src={Grocery} alt="" />
                    </div>
                    <div style={{ height: '40vh', overflowY: 'auto' }}>
                        {
                            data.map((val, index) => {
                                return (
                                    <div key={index} className='main_products_list_individual'>
                                        <div style={{ width: '120px', height: '60px', overflow: 'hidden' }}>
                                            <img src={val.imageUrl} alt="" width={'100%'} />
                                        </div>
                                        <div style={{ flexGrow: 1, marginLeft: '10px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <h3 style={{ color: '#61B846' }}>{val.category}</h3>
                                                <p>1 {val.unitname}</p>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p style={{ fontSize: '12px' }}>{val.desc}</p>
                                                <RiAddFill style={{ padding: '5px 10px', backgroundColor: '#61B846', color: 'white' }} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;