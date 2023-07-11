import React from 'react'
import {TbPlayFootball} from 'react-icons/tb'

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick} className=''>
        <div className='text-7xl  p-5 bg-primary rounded-full cursor-pointer hover:to-red-300'>
             <TbPlayFootball className=''/>
           </div>
           <p className='text-center font-medium my-1 capitalize'>{category}</p>
            
    </div>
  )
}

export default FilterProduct