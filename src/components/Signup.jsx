import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Loader from "./loader";
import { auth } from './firebaseconfig'

function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className="signup-page">
            <h1 className='main-heading'>SAYLANI WELFARE</h1>
            <p className='sub-heading'>ONLINE DISCOUNT STORE</p>
            <form className="input-div" onSubmit={handleSubmit}>
                <div className="input-innerdiv"><input placeholder="Name" required onChange={(e) => setData({ ...data, name: e.target.value })} className="input" type={"text"}></input></div>
                <div className="input-innerdiv"><input placeholder="Contact" required onChange={(e) => setData({ ...data, contact: e.target.value })} className="input" type={"text"}></input></div>
                <div className="input-innerdiv"><input placeholder="Email" required onChange={(e) => setData({ ...data, email: e.target.value })} className="input" type={"email"}></input></div>
                <div className="input-innerdiv"><input placeholder="Password" required onChange={(e) => setData({ ...data, password: e.target.value })} className="input" type={"password"}></input></div>
                <div className="input-innerdiv"><p className='sub-heading1'>Forget Password?</p></div>
                <div className='signup-btn-div'> <button className='signup-button' disabled={loading ? true : false} type="submit">{loading ? <Loader /> : 'SingUp'}</button></div>
                <div className="input-innerdiv"><p onClick={() => navigate('/login')} className='sub-heading2'>Already have an account?Login</p></div>
            </form>

        </div>
    )
}
export default Signup;