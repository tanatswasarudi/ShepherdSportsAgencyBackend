import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {MdAddPhotoAlternate} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
import {BiChevronRight} from 'react-icons/bi'

const Booking = () => {
    const { filterby } = useParams();
    const DataProduct = useSelector((state) => state.product.productList);
    const productDisplay = DataProduct.filter((el) => el._id === filterby)[0]
    console.log(productDisplay)

    const [showAllPhotos,setShowAllPhotos] = useState(false)

  return (
    <div className=' bg-gray-100 px-4 py-4  md:px-8 md:py-8 w-full'>
    <div className="relative md:px-8 px-2 w-full">
       <div className="md:flex justify-between grid grid-cols-1 rounded-3xl overflow-scroll scrollbar-none w-full">
           <div className="h-44 w-60" >
              <img src={productDisplay.photos[0]} alt='' className="hover:scale-110 h-full rounded-2xl" />
           </div> 
           <span className='text-4xl font-bold flex-col text-dark-purple'> 
           {productDisplay.title}
           <a target='_blank' href={'https://maps.google.com/?q='+productDisplay.address} className='text-lg font-semibold underline block my-2'>{productDisplay.address}</a>
           </span> 
           <span className='text-4xl flex flex-col font-bold text-dark-purple'>
             #{productDisplay.jersey}
             <span className='md:text-lg text-4xl my-2 capitalize text-gray-500 font-semibold'>{productDisplay.category}</span>
             
           </span>
                
       </div>
       {productDisplay.photos.length > 3 && (
          <button
            onClick={() => setShowAllPhotos(true)}
            className='mt-4 hover:bg-slate-600 flex gap-1 py-2 px-4 rounded-2xl bg-gray-500 shadow shadow-gray-500 md:absolute bottom-4 right-4'
          >
            <MdAddPhotoAlternate /> More Pictures
          </button>
        )}
  </div>
  {showAllPhotos && (
        <div className=' top-0 left-0 bg-black my-4 w-full min-h-screen'>
          <div className='p-8 grid gap-4 w-full'>
            <div className='flex justify-end'>
              <button
                onClick={() => setShowAllPhotos(false)}
                className='py-2 px-4 rounded-2xl bg-gray-500 shadow shadow-gray-500 z-10'
              >
                <GrClose /> Close 
              </button>
            </div>
            {productDisplay.photos.map((video, index) => (
              <div key={index} className=''>
                <img src={productDisplay.photos} className='hover:scale-110 transition-all' alt='' />
              </div>
            ))}
          </div>
        </div>
      )}
  
 
  <div className="md:px-4 px-2 mt-8 gap-8 grid grid-cols-1 w-full">
       <div className="w-full flex flex-col">
       <div className='flex flex-col font-serif text-lg md:text-2xl mb-6 w-full'>
             <span className='hover:text-red-700'>Date of Birth:</span> 
               <span className='text-lg'>{productDisplay.DOB}</span>
             </div> 
       <label className='text-lg hover:text-red-700 font-serif mb-2'>Stats:</label>
             <div className='grid grid-cols-1 md:grid-cols-4 text-base text-cyan-500 capitalize font-serif gap-2'>
                 <span className='flex items-center gap-2 text-base'><BiChevronRight className='text-sm text-black'/><span className='text-black font-semibold'>Appearances:</span> <span className='text-lg'> {productDisplay.appearances}</span> </span> 
                 <span className='flex items-center gap-2 text-base'><BiChevronRight className='text-sm text-black'/><span className='text-black font-semibold'> Goals:</span> <span className='text-lg'>{productDisplay.goals}</span></span> 
                 <span className='flex items-center gap-2 text-base'><BiChevronRight className='text-sm text-black'/><span className='text-black font-semibold'>Assists:</span> <span className='text-lg'> {productDisplay.assists}</span></span>
                 <span className='flex items-center gap-2 text-base'><BiChevronRight className='text-sm text-black'/><span className='text-black font-semibold'>YellowCards:</span> <span className='text-lg'> {productDisplay.yellowcard}</span></span>
                 <span className='flex items-center gap-2 text-base'><BiChevronRight className='text-sm text-black'/><span className='text-black font-semibold'>RedCards:</span> <span className='text-lg'>{productDisplay.redcard}</span></span>
               </div>
              
             <div className='my-4 hover:text-red-700 md:flex md:flex-col grid grid-cols-1 overflow-scroll scrollbar-none'>
             <h2 className='font-semibold text-lg md:text-2xl'>VideoLink:</h2>
              <a target='_blank' href={productDisplay.videolink} className=' font-semibold underline block text-base text-gray-500'>{productDisplay.videolink}</a></div>
             <div className='my-4 flex flex-col'>
             <h2 className='font-semibold text-lg md:text-2xl hover:text-red-700'>Description:</h2>
              <span className='text-base text-gray-500'>{productDisplay.description}</span>
             </div>
             <label className='text-lg font-serif mb-2 hover:text-red-700'>Attributes:</label>
             <div className='grid grid-cols-2 md:grid-cols-4 text-sm text-cyan-500 capitalize font-serif gap-2'>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[0]} </span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[1]}</span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[2]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[3]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[4]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{productDisplay.perks[5]}</span>
               </div>
             
             
      </div>
  </div>
    </div>
 )   
}

export default Booking
