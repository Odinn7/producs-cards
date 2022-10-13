import { IProduct } from "../../types/IProduct";
import { createSlice } from "@reduxjs/toolkit";

interface IProductsState {
    products: IProduct[]
}

const initialState: IProductsState = {
    products: []
}

export const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts(state, action) {
            state.products = action.payload
        }
    }
})