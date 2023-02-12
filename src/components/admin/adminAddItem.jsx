import React, { useEffect, useState } from 'react';
import './admin.css'
import Adminbottom from './adminbottom';
import AdminHeader from './adminHeader';
import { database, storage } from '../firebaseconfig'
import { getDatabase, ref, set } from "firebase/database";
import { ref as Storageref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';



function AdminAddItem() {
    const [data, setData] = useState({
        name: '',
        imageUrl: '',
        category: '',
        desc: '',
        unitname: '',
        unitprice: ''
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'admin') {
            navigate('/login')
        }
    }, [])

    const handleImage = (e) => {
        console.log(e)
        const reference = Storageref(storage, `images/${Math.floor(Math.random() * 4749857932983498)}.png`);
        const uploadTask = uploadBytesResumable(reference, e);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData({ ...data, imageUrl: downloadURL })
                    console.log('File available at', downloadURL);
                });
            }
        );

    }

    const hanldeAddItem = (e) => {
        e.preventDefault()
        const db = getDatabase();
        set(ref(db, 'items/' + Math.floor(Math.random() * 83974372848)), {
            name: data.name,
            imageUrl: data.imageUrl,
            category: data.category,
            desc: data.desc,
            unitname: data.unitname,
            unitprice: data.unitprice
        }).then(() => {
            setData({
                ...data,
                name: '',
                category: '',
                desc: '',
                unitname: '',
                unitprice: ''
            })
            alert("done")
        })
    }
    return (
        <div className='admin_main'>
            <div className='admin_sub_main'>
                <Adminbottom name='additem' />
                <AdminHeader />
                <hr />
                <div className='add_category_form_div'>
                    <form className='add_category_form' onSubmit={hanldeAddItem}>
                        <input type="file" accept="image/png, image/jpeg" placeholder='Select Image' onChange={(e) => handleImage(e.target.files[0])} />
                        <input type="text" value={data.name} placeholder='Item Name' onChange={(e) => setData({ ...data, name: e.target.value })} />
                        <select name="" id="" value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })}>
                            <option value="" selected disabled>Select Category</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Meat">Meat</option>
                            <option value="Vegetable">Vegetable</option>
                        </select>
                        <textarea value={data.desc} onChange={(e) => setData({ ...data, desc: e.target.value })} name="" id="" cols="30" rows="10" placeholder='Item Description'></textarea>
                        <div className='pricing_div'>
                            <label htmlFor="unitprice">Unit Name</label>
                            <input type="text" value={data.unitname} id='unitname' onChange={(e) => setData({ ...data, unitname: e.target.value })} placeholder='kg / dozen' />
                        </div>
                        <div className='pricing_div'>
                            <label htmlFor="unitprice">Unit Price</label>
                            <input type="number" value={data.unitprice} id='unitprice' onChange={(e) => setData({ ...data, unitprice: e.target.value })} placeholder='kg / dozen' min={1} />
                        </div>
                        <button type='submit'>Add Item</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddItem;