import React, { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import {selectProduct, fetchProductData, clearSearchResults} from '../redux/productSlide';
import AllProduct from '../Components/AllProducts';


const ProductComponent = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const searchResults = useSelector((state) => state.product.searchResults);
  const selectedProducts = useSelector((state) => state.product.selectedProducts);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleProductSelect = (productId) => {
    if (!selectedProducts.includes(productId)) {
      dispatch(selectProduct({ productId }));
    }
  };
  
  
  

  const getProductNameById = (productId) => {
    // Replace this with your own logic to retrieve the product name based on the ID
    const product = productList.find((p) => p.id === productId);
    
if (productId) {
  const { name, category, club, goals, assists ,photos } = productList.find((p) => p.id === productId);
  console.log(name);     
  console.log(category); 
  console.log(club); 
  console.log(goals); 
  console.log(assists); 
  console.log(photos);    
} else {
  console.log('Product not found');
}
    return product ? product.name && product.category && product.club && product.assists && product.goals : '';
  };

  return (
    <div className=''>
      <div className="mt-10 flex flex-col mx-auto max-w-lg">
        <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Search products"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      </div>
      

      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Search Results:</h2>
          {searchResults.map((product) => (
            <div className=''>
              <div key={product.id} className=" bg-dark-purple p-2 rounded-2xl shadow shadow-black w-full min-w-[280px] max-w-[280px]  flex flex-col overflow-scroll scrollbar-none">
          <div className="w-[260px] min-h-[200px] px-2 rounded-2xl">
            <img src={product.photos[0]} className="h-full w-full" alt="" />
          </div>
          <h2 className='text-lg font-serif font-bold text-blue-400'>{product.title}</h2>
          <p className='flex items-center font-bold font-serif my-2 gap-2'>TEAM: {product.club}</p>
          <p className="flex items-center font-bold font-serif my-2 gap-2">AGE: {product.age}</p>
          <p className="flex items-center font-bold font-serif my-2 gap-2">GOALS: {product.goals}</p>
          <p className="flex items-center font-bold font-serif my-2 gap-2">ASSISTS: {product.assists}</p>
          <p className="flex items-center font-bold font-serif my-2 gap-2">POSITION: <span className="capitalize">{product.category}</span> </p>
         
              <button
                onClick={() => handleProductSelect(product.id)}
                disabled={selectedProducts.includes(product.id)}
                className={`${
                  selectedProducts.includes(product.id)
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } px-4 py-2 rounded`}
              >
                {selectedProducts.includes(product.id)
                  ? 'Selected'
                  : 'Select for Comparison'}
              </button>
            </div>
            </div>
          ))}
          
        </div>
      ) : (
        
          <div>
            <AllProduct/>
          </div>
         
      )}


    </div>
  );
};

export default ProductComponent;
