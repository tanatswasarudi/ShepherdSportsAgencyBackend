import React from 'react'
import { Link } from 'react-router-dom'

const CardFeature = ({title,club,photos,age, category,id,loadingArray}) => {
  return (
    <div className='bg-slate-200 cursor-pointer w-full min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] gap-3 shadow rounded-2xl py-5 md:px-4 flex flex-col overflow-scroll scrollbar-none'>
         {title ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} className='flex flex-col cursor-pointer bg-gray-100 p-2 rounded-2xl'>       
         <div className=' h-44 w-60 md:w-[440px] md:h-[350px] justify-center items-center grow shrink-0 overflow-scroll scrollbar-none'> 
          {photos && photos.length > 0 ? (
              <img src={photos[0]} className="h-full rounded-2xl  " alt='' />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image Available</p>
              </div>
            )}
          </div>        
        <p className='text-lg font-bold text-dark-purple mb-2 mt-4'>{title}</p>
        <p className='text-gray-500 font-semibold font-serif mb-2'> {category}</p>
        <p className='text-gray-500 font-semibold font-serif mb-2'>{club}</p>
        <p className='text-gray-500 font-semibold font-serif mb-2'>{age}</p>  
        </Link>
       </> 
    ) :(
        <div className="flex justify-center font-serif items-center ">
        <p>{loadingArray}</p>
        </div>
    )}
    </div>
   
  
  )
}

export default CardFeature