import './admin.css';
import Adminbottom from './adminbottom';
import AdminHeader from './adminHeader';
import { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'admin') {
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
                <Adminbottom name='home' />
                <AdminHeader />
                <hr />
                <div>
                    <h3>All Products</h3>
                    <div className='main_products_list'>
                        {
                            data.map((val, index) => {
                                return (
                                    <div key={index} className='main_products_list_individual'>
                                        <div style={{width:'120px',height:'60px',overflow:'hidden'}}>
                                            <img src={val.imageUrl} alt="" width={'100%'} />
                                        </div>
                                        <div>
                                            <h3 style={{color:'#61B846'}}>{val.category}</h3>
                                            <p>1 {val.unitname}</p>
                                        </div>
                                        <p>$ {val.unitprice}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}
export default Admin;