import React from "react";
import { BsChevronBarRight, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import { Link } from "react-router-dom";
import {BiChevronRight} from 'react-icons/bi'

const Footer = ({id}) => {
  const connectWithWhatsApp = () => {
    const phoneNumber = '+263783677124';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url);
  }
  const phoneNumber = '+263 78 589 4760'; // Replace with the desired recipient's phone number
  const handleCallRequest = () => {
    const message = 'Please call me back!'; 
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  return (
    <footer className="w-full bg-gray-900 text-gray-200 items-center z-50">
      <div className="p-10"> 
        <div className="max-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5 pb-4">
            <h4 className="pb-4 text-red-500">Company</h4>
              <p className="text-gray-500">
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><MdEmail/><strong>Email:</strong>shepherdsportsagency@gmail.com</span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-blue-500"><BsFacebook className="text-blue-500" /><strong>Facebook: </strong><span className='text-sm'>Shepherd Sports Management</span></span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-green-500" onClick={connectWithWhatsApp}><FaWhatsappSquare className="text-2xl text-green-600"/><strong>WhatsApp:</strong>+263 78 589 4760</span><br/>
              </p>
              
            </div>
            <div className="mb-5 items-center cursor-pointer md:px-6 px-2 ">
            <h4 className="text-red-500 pb-4 ">Useful Links</h4>
            <ul className="text-gray-500">
              <li className="pb-4 "><Link to={""} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}><span className="flex items-center flex-row hover:text-yellow-500 "><BsChevronBarRight/>HOME</span></Link></li>
              <li className="pb-4"><Link to={"register"}><span className="flex items-center flex-row hover:text-yellow-500"><BsChevronBarRight/>Register</span></Link> </li>
              <li className="pb-4"><Link to={"login"}><span className="flex items-center flex-row hover:text-yellow-500"> <BsChevronBarRight/>Login</span></Link></li>
              <li className="pb-4"><Link to={"players"}><span className="flex items-center flex-row hover:text-yellow-500"> <BsChevronBarRight/>Players</span></Link></li>
            </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-red-500 pb-4">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Player Development</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Player Transfers</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Career Management</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Web Design</li>
               
              </ul>
            </div>
            <div className="mb-5">
              <ul>
              <li className="pb-4 text-red-500">Register Today</li>
              <li className="flex flex-row items-center font-serif hover:text-yellow-500 text-gray-500" onClick={handleCallRequest}><IoMdCall className="text-blue-500"/> <strong>Phone:</strong>+263 78 589 4760</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10 ">
          <h4 className="text-yellow-500 hover:text-red-500 ">Developed by: WEBTECH</h4>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500"><MdEmail/><strong>Email:</strong>tanatswasarudi09@gmail.com</p>
          <p className="flex flex-row items-center font-serif hover:text-red-500 text-gray-500" onClick={connectWithWhatsApp}><IoMdCall className="text-blue-500"/> <strong>Call:</strong>+91 826-44208-15 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;