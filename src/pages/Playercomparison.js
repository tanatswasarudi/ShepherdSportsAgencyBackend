import React, { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import {selectProduct, fetchProductData, deselectProduct, clearSearchResults} from '../redux/productSlide';



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
    dispatch(selectProduct({ productId }));
  };

  const handleProductDeselect = (productId) => {
    dispatch(deselectProduct({ productId }));
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
          <button className="w-[150px]  p-2 items-center rounded-full border-t border-yellow-500 shadow bg-primary">More</button>
         
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
          ))}
        </div>
      ) : (
        <div className=''>
          <h2 className="text-xl font-bold my-4">All Players:</h2>
          <div className='flex flex-wrap gap-y-7 w-full gap-6 p-4 px-2'>
          {productList.map((product) => (
            <div key={product.id} className=" bg-dark-purple p-2 rounded-2xl shadow shadow-black w-full min-w-[280px] max-w-[280px]  flex flex-col overflow-scroll scrollbar-none">
            <div className="w-[260px] min-h-[180px] px-2 rounded-2xl">
            <img src={product.photos[0]} className="h-full w-full" alt="" />
          </div>
          <h2 className='text-lg font-serif font-bold text-red-950'>{product.title}</h2>
          <p className='flex items-center font-bold my-2 gap-2'>TEAM: {product.club}</p>
          <p className="flex items-center font-bold my-2 gap-2">AGE: {product.age}</p>
          <p className="flex items-center font-bold my-2 gap-2">POSITION: <span className="capitalize">{product.category}</span> </p>
          <p className="flex items-center font-bold my-2 gap-2">GOALS: <span className="capitalize">{product.goals}</span> </p>
          <p className="flex items-center font-bold my-2 gap-2">ASSISTS: <span className="capitalize">{product.assists}</span> </p>
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
          ))}
          </div>
         
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div className='grid grid-cols-2 items-center'>
          <h2 className="text-xl font-bold mb-4">Selected Products for Comparison:</h2>
          {selectedProducts.map((productId) => (
            <div key={productId} className="flex items-center justify-between ">
              <h3>{getProductNameById(productId)}</h3>
              <button
                onClick={() => handleProductDeselect(productId)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Deselect
              </button>
            </div>
          ))}
          <div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Compare
          </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
