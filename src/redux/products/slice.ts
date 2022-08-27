import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Products, productsSliceState } from './types';

const initialState: productsSliceState = {
    productsItems: [],
    searchQuery: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const { data } = await axios.get<Products[]>(
            'https://6308e55f722029d9dddadf72.mockapi.io/items',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        return data;
    } catch (error) {
        throw new Error(`${error}`);
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {})
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsItems = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {})
            .addDefaultCase(() => {});
    },
});

export const { setSearchQuery } = productsSlice.actions;

export default productsSlice.reducer;
