import { IProduct } from "../../types/IProduct";
import { createSlice } from "@reduxjs/toolkit";

interface IProductsState {
    products: IProduct[],
    favorites: IProduct[]
}

const initialState: IProductsState = {
    products: [],
    favorites: []
}

export const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts(state, action) {
            state.products = action.payload
        },
        addingToFavorite(state, action) {
            state.favorites.push(action.payload)
        },
        deletingFavorite(state, action) {
            state.favorites = state.favorites.filter(item => {
                return item.id !== action.payload
            })
        }
    }
})

export const {getProducts, addingToFavorite,deletingFavorite} = ProductsSlice.actions;

export default ProductsSlice.reducer;