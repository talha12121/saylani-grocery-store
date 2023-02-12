import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "./loader";
import { getDatabase, ref, child, get } from "firebase/database";



function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const auth = getAuth();
    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.email === 'admin@gmail.com') {
                    alert('admin login in')
                    localStorage.setItem('loggedin', 'admin')
                    navigate('/admin')
                }
                else {
                    const dbRef = ref(getDatabase());
                    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            localStorage.setItem('loggedin', 'user')
                            localStorage.setItem('userdata', JSON.stringify(snapshot.val()))
                            alert('user logged in')
                            navigate('/user')
                        } else {
                            console.log("No data available");
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                alert('wrong email or pass')

            }).finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className="login-page">
            <h1 className='main-heading'>SAYLANI WELFARE</h1>
            <p className='sub-heading'>ONLINE DISCOUNT STORE</p>
            <form className="input-div" onSubmit={handleLogin}>
                <div className="input-innerdiv"><input placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} className="input" type={"email"} /></div>
                <div className="input-innerdiv"><input placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })} className="input" type={"password"} /></div>
                <div className="input-innerdiv"><p className='sub-heading1'>Forget Password?</p></div>
                <div className='signup-btn-div'> <button className='signup-button' type="submit">{loading ? <Loader /> : 'Login'}</button></div>
                <div className="input-innerdiv"><p onClick={() => navigate('/signup')} className='sub-heading2'>Don,t have an account?Register</p></div>
            </form>
        </div>

    )
}
export default Login;