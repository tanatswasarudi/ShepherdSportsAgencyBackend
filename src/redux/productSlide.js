import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  searchResults: [],
  selectedProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = action.payload;
    },
    selectProduct: (state, action) => {
      const { productId } = action.payload;
      state.selectedProducts.push(productId);
    },
    deselectProduct: (state, action) => {
      const { productId } = action.payload;
      state.selectedProducts = state.selectedProducts.filter(
        (id) => id !== productId
      );
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
});

export const fetchProductData = (searchQuery) => async (dispatch) => {
  try {
    let url = `${process.env.REACT_APP_SERVER_DORMIN}/players`;

    // If a search query is provided, append it to the URL
    if (searchQuery) {
      url += `?query=${searchQuery}`;
    }

    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // If a search query is provided, dispatch setSearchResults action
    if (searchQuery) {
      dispatch(setSearchResults(data));
    } else {
      dispatch(setDataProduct(data));
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


export const {
  setDataProduct,
  setSearchResults,
  clearSearchResults,
  selectProduct, 
  deselectProduct,
} = productSlice.actions;

export default productSlice.reducer;