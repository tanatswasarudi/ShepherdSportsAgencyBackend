import React, { useState } from "react";
import pic from "../Components/assets/pic.jpg";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import {AiFillHome,AiOutlineUserAdd} from 'react-icons/ai'
import {BsDatabaseFillAdd} from 'react-icons/bs'
import {BiUserMinus}from 'react-icons/bi'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
  };
  const phoneNumber = '+263 783-677-124'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };

  const connectWithWhatsApp = () => {
    // Replace the following with your WhatsApp number
    const phoneNumber = '+263 783-677-124';

    // Create the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Open the WhatsApp URL
    window.open(url);
  }


  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header className="fixed drop-shadow-md shadow h-20 w-full z-50 ">
      {/*desktop*/}

      <div className="flex items-center shadow bg-slate-100 justify-between">
        <div className="">
          <img src={pic} className="md:w-24 w-[70px] md:h-20 h-[60px]" />
        </div>
        <div className="flex items-center gap-3 md:gap-7">
        
          <div className=" px-2 cursor-pointer" onClick={handleShowMenu}>
            <div className="text-3xl w-8 h-8 rounded-full overflow-hidden shadow drop-shadow">
              {userData.image ? (
                <img src={userData.image} alt="" className="h-full w-full" />
              ) : (
                <FaUserAlt />
              )}
            </div>
            {showMenu && (
              <div className="absolute  bg-dark-purple right-2 py-1 font-serif w-36 flex items-center flex-col m-auto cursor-pointer shadow rounded min-w-[100px]">
                <nav className="flex items-center flex-col text-base w-32 px-2 py-1 md:text-lg bg-black text-cyan-500 ">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"addplayers"} className=" mb-6 hover:text-cyan-900 ">
                    <BsDatabaseFillAdd/>
                  Add Players
                  </Link> 
                )}

                {userData.name ? (
                  <p
                    className="mb-6"
                    onClick={handleLogout}
                  >
                    {" "}
                    <BiUserMinus className="text-lg"/>
                   <span className="text-sm mb-6">Logout({userData.name}){" "}</span>
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="mb-6"
                  >
                    {" "}
                    <AiOutlineUserAdd/>
                    Login{" "}
                  </Link>
                )}
                
                  <Link to={""}className="mb-6 "><AiFillHome/>Home</Link>
                  <FaWhatsappSquare onClick={connectWithWhatsApp} className="text-3xl mb-6 text-green-600"/>
                  <IoMdCall onClick={handleCallRequest} className="text-blue-500 text-3xl"/>

                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
    </header>
  );
};

export default Header;


