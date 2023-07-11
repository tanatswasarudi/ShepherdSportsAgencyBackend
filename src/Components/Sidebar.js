import React, { useState } from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {GiSoccerBall} from 'react-icons/gi';
import {BiSolidUserCircle} from 'react-icons/bi'
import {FaUserAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {BiUserMinus}from 'react-icons/bi'
import {GiSoccerKick} from 'react-icons/gi'
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import {TbSoccerField} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'

const Sidebar = () => {
  const userData = useSelector((state) => state.user);
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logoutRedux());  
    };
    const connectWithWhatsApp = () => {
      const phoneNumber = '+918264420815';
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      window.open(url);
    }
  
    const phoneNumber = '+918264420815'; 
    const handleCallRequest = () => {
      const message = 'Please call me back!'; 
      const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(callUrl);
    };
  return ( 
       <div className={`${open ? 'w-72 ' : 'w-20'} duration-300 p-5 pt-8 h-full bg-dark-purple relative`}>
      <BsArrowLeftCircle 
      className={`absolute cursor-pointer text-3xl items-center -right-3 top-9 w-7 ${!open && "rotate-180"}`}
      onClick={()=>setOpen(!open)}/>

       <div className='flex gap-x-4 items-center'>
         <GiSoccerBall className={`cursor-pointer text-3xl duration-500 ${!open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Football</h1>        
       </div>

       <ul className='mt-6'>
             <Link to={"register"} className={` text-sm flex items-center  gap-x-4 cursor-pointer p-2 ${!open && "hidden"}`}><FaUserAlt className='text-3xl'/>SignIn</Link>
             {userData.name ? (
                <Link to={"/"} className={` text-sm flex items-center  gap-x-4 cursor-pointer p-2 ${!open && "hidden"}`}> onClick={handleLogout} <span className="text-sm font-bold">{userData.name}</span><BiUserMinus className='text-3xl'/>Logout </Link>
                  ) : (
                    <Link to={"login"}className={`text-sm  flex items-center gap-x-4 cursor-pointer p-2 ${!open && "hidden"}`}><BiSolidUserCircle className='text-3xl'/>Login</Link>
                  )}
                  {
                    userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                      <Link to={"players"} className={`text-sm  flex items-center gap-x-4 cursor-pointer p-2 ${!open && "hidden"}`}>
                      <GiSoccerKick className='text-3xl'/>
                          Add Players
                    </Link>
                    )
                  } 
                    <li className={` text-sm flex items-center  gap-x-2 cursor-pointer p-2 ${!open && "hidden"}`}><FaWhatsappSquare onClick={connectWithWhatsApp} className='text-green-500 text-3xl' /> WhatsApp Us</li> 
                    <li className={` text-sm flex items-center  gap-x-2 cursor-pointer p-2 ${!open && "hidden"} `}><IoMdCall onClick={handleCallRequest}  className='text-blue-500 text-3xl'/> Call Us</li>        
                  <Link to={"playercomparison"}  className={` text-sm flex items-center mt-8  gap-x-2 cursor-pointer p-2 `}><TbSoccerField className='text-3xl text-green-500 hover:text-red-900 '/></Link>
                  <Link to={"search"}  className={` text-sm flex items-center mt-8  gap-x-2 cursor-pointer p-2 `}><AiOutlineSearch className='text-3xl text-primary hover:text-red-900'/></Link>
                  <Link to={"players"}  className={` text-sm flex items-center mt-8  gap-x-2 cursor-pointer p-2`}><GiSoccerKick className='text-3xl text-red-500 hover:text-red-900'/></Link>
           
       </ul>
     
    </div>
   

 
  )
}

export default Sidebar
