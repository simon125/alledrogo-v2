import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk

export const fetchProducts = createAsyncThunk(
  "products",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (response.ok) {
        return await response.json();
      }

      throw new Error();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// [].map((element, index, arr)=>)

const productsSlice = createSlice({
  initialState: {
    list: [],
    filters: {
      search: "",
      minPrice: "",
      maxPrice: "",
    },
    isLoading: false,
    isError: false,
    cart: [],
    // status: "success" | "loading" | "error"
  },
  name: "products",
  reducers: {
    setSearch: (state, action) => {
      // onChange={(event) => dispatch(setSearch(event.target.value))}  event.target.value wskoczy nam jako action.payload
      state.filters.search = action.payload;
    },
    setMinPrice: (state, action) => {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = action.payload;
    },
    setFilter: (state, action) => {
      state.filters[action.payload.key] = action.payload.value;
    },
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload.products;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const {
  setSearch,
  setMaxPrice,
  setMinPrice,
  addProductToCart,
  resetCart,
} = productsSlice.actions;

export default productsSlice.reducer;
