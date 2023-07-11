import React from 'react'
import {  useSelector } from "react-redux";
import Homecard from '../Components/Homecard';
import landers from "../Components/assets/ibosso.png"
import platnum from "../Components/assets/platnum.png"
import dembare from "../Components/assets/De-mbare_copy.jpg"
import ngezi from "../Components/assets/NPS.png" 
import mbada from "../Components/assets/mbada.png"
import zifa from "../Components/assets/Zifa.png"
import zim from "../Components/assets/PSL.png"
import career from "../Components/assets/playerdevelopment.jpg"
import skill from "../Components/assets/skill.jpg"
import transfers from "../Components/assets/career2.jpg"



const IndexPage = () => {
const DataProduct = useSelector((state)=>state.product.productList)
  console.log(DataProduct)
  const homeProductCartList = DataProduct.slice(1,5)
  const LoadingArray = new Array(4).fill(null)

  
  return (
    <div className=''> 
    <div className='flex flex-wrap gap-y-7 w-full gap-6 p-4 px-2 '>
          {
            homeProductCartList[0] ?
            homeProductCartList.map(el =>{
              return(
                <Homecard
                key={el._id}
                id={el._id}
                photos={el.photos}
                address={el.address}
                title={el.title}
                category={el.category}
                age={el.age}
                club={el.club}

                
                
                />
              )
            }) 
            :
            LoadingArray.map((el,index)=>{
              return(
                <Homecard
                key={index}
                loadingArray={"Wait While Loading..."}
                />
              )
            })
         }
          </div>
          <div className='mt-10 px-4 flex flex-col w-full'>
            <h1 className='text-3xl font-serif font-bold py-4 text-black'>Our Focus</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 overflow-scroll scrollbar-none'> 
           
           <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={career} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-lg'>Career Development</p><p className='text-sm text-gray-500'>At times having skill is not enough but you need a career</p></div> 
           <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={skill} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-lg'>Skill Enhancement</p><p className='text-sm text-gray-500'>We will develop and improve your skills</p></div>  
           <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={transfers} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-lg'>Player Transfers</p><p className='text-sm text-gray-500'>We will help you knock your doors into different clubs</p></div> 
            </div>
          </div>

          <div className='mt-10 px-4 flex flex-col w-full'>
            <h1 className='text-3xl font-serif font-bold py-4 text-black'>Popular Clubs</h1>
            <div className='grid md:grid-cols-4 grid-cols-1  gap-6  overflow-scroll scrollbar-none w-full'> 
           
           <div className='min-w-[280px] max-w-[280px] shadow border-t hover:bg-slate-400 border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[200px] '><img src={platnum} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>FC Platnum</p></div> 
           <div className='min-w-[280px] max-w-[280px] shadow border-t hover:bg-slate-400 border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[200px] '><img src={dembare} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Dynamos FC</p></div> 
           <div className='min-w-[280px] max-w-[280px] shadow border-t hover:bg-slate-400 border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[200px] '><img src={ngezi} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Ngezi Platnum</p></div>  
           <div className='min-w-[280px] max-w-[280px] shadow border-t hover:bg-slate-400 border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[200px] '><img src={landers} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Highlanders FC</p></div> 
            </div>
          </div>

          <div className='mt-10 mb-8 px-4 flex flex-col w-full'>
            <h1 className='text-3xl font-serif font-bold py-4 text-black'>Popular Sponsors</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6  overflow-scroll scrollbar-none min-w-[300px] max-w-[300px] '> 
            
           <div className='min-w-[300px] max-w-[300px] shadow bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={zim} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Castle Lager Premier Soccer League</p></div> 
           <div className='min-w-[300px] max-w-[300px] shadow bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={zifa} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Zim Football Association</p></div>  
           <div className='min-w-[300px] max-w-[300px] shadow bg-slate-200 rounded flex flex-col items-center px-2'><div className='w-[260px] h-[180px] '><img src={mbada} className='w-full h-full' alt=''/></div><p className='mt-2 font-sans text-base'>Mbada Diamond</p></div> 
            </div>
            
          </div>
          
    </div>
  )
}

export default IndexPage