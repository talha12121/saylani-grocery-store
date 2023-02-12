import '../App.css';
import Logo from "../assests/Logo.png"
import {  useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()
  return (
    <div className='start-box'>
      <div className='logo-img'>
      <img className='img' src={Logo} alt="Logo" />
      
      </div>
      <h1 className='main-heading'>SAYLANI WELFARE</h1>
      <p className='sub-heading'>ONLINE DISCOUNT STORE</p>
     <div className='btn-div'> <button onClick={()=>navigate('/signup')} className='start-button'>Get Started</button></div>
    </div>
  );
}

export default Home;