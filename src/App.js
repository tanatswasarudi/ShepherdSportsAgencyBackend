import Sidebar from './Components/Sidebar';
import { ToastContainer,toast} from 'react-toastify'
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from "react-router-dom"; 
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
 (async()=>{
  const Res = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/soccer`)  
  const Resdata = await Res.json()
  console.log(Resdata)
  dispatch(setDataProduct(Resdata))
 })()
  },[])


  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeButton: false,
    // Add custom styling for the toast messages
    toastStyle: {
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '4px',
      // Add any other styles you want
    },
    // Add custom class name for the toast container
    toastClassName: 'custom-toast-container',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header  />
    <main className="flex flex-grow pt-20 min-h-[calc(100vh)]">
      <div className=""> 
        <Sidebar />
      </div>
      <div className="flex-grow md:p-7">
        <Outlet />
        <ToastContainer {...toastOptions} />
      </div>
    </main>
    <Footer />
  </div>
     
   
  );
}

export default App;
