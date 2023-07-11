import React from 'react'
import {  useSelector } from "react-redux";
import AllProduct from '../Components/AllProducts';

const Home = () => {
    const DataProduct = useSelector((state)=>state.product.productList)
    console.log(DataProduct)

  return (
    <div className='mt-4'>
      <AllProduct />
  </div>
  )
}

export default Home
