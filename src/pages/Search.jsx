import React,{useState} from 'react'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch} from 'react-redux';
import {
    fetchProductData,
    clearSearchResults
  } from '../redux/productSlide';
  import AllProduct from '../Components/AllProducts';


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
      </div>
    
      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          {/* Render searchResults */}
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mt-4">All Players:</h2>
          <div className=''>
          <AllProduct />
          </div>
        </div>
      )}
    </div>
    
    );
  };

export default ProductComponent


  
