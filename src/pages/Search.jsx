import React,{useState} from 'react'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch} from 'react-redux';
import {
    fetchProductData,
    clearSearchResults
  } from '../redux/productSlide';
  import { Link} from 'react-router-dom'
  import {BiLoaderCircle} from 'react-icons/bi'
  import {CiCircleMore} from 'react-icons/ci'


const ProductComponent = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList);
    console.log(productList)
    const searchResults = useSelector((state) => state.product.searchResults);
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
      dispatch(fetchProductData());
    }, [dispatch]);
  
    const handleSearch = () => {
      if (searchQuery) {
        dispatch(fetchProductData(searchQuery));
      } else {
        dispatch(clearSearchResults());
      }
    };
  
    return (
      <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
        {searchResults.length > 0 ? (
  <div>
    <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
    <div className='flex flex-wrap gap-y-7 w-full gap-6 p-4 px-2'>
      {searchResults.map((product) => (
        <div key={product.id} className=' bg-slate-dark-purple p-2 rounded-2xl shadow shadow-black w-full min-w-[280px] max-w-[280px]  flex flex-col overflow-scroll scrollbar-none'>
        <Link to={ `/booking/${product._id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
        <div className="w-[260px] min-h-[200px] px-2 rounded-2xl">
          <img src={product.photos[0]} className="h-full w-full" alt="" />
        </div>
        <h2 className='text-lg font-serif font-bold text-red-950'>{product.title}</h2>
        <p className='flex items-center font-bold font-serif my-2 gap-2'>TEAM: {product.club}</p>
        <p className="flex items-center font-bold font-serif my-2 gap-2">AGE: {product.age}</p>
        <p className="flex items-center font-bold font-serif my-2 gap-2">GOALS: {product.goals}</p>
        <p className="flex items-center font-bold font-serif my-2 gap-2">ASSISTS: {product.assists}</p>
        <p className="flex items-center font-bold font-serif my-2 gap-2">POSITION: <span className="capitalize">{product.category}</span> </p>
        <button className="w-[150px]  p-2 flex items-center rounded-full border-t border-yellow-500 shadow bg-primary">View More<CiCircleMore className=' text-gray-500'/></button>
        </Link>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className='bg-blue-900 rounded justify-center shadow w-[240px] shadow-black mt-10'>
   <h1 className='font-sans text-lg'>We are working on your search results <BiLoaderCircle/></h1>
  </div>
)}

      </div>
      </div>
    )
    }
export default ProductComponent;

