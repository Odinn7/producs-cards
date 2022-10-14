import { IProduct } from "../../types/IProduct";
import { createSlice } from "@reduxjs/toolkit";


interface IProductsState {
	products: IProduct[],
	favorites: IProduct[],
	current: {
		id: number,
		name: string,
		price: number,
		src: string,
	}
}

const initialState: IProductsState = {
	products: [],
	favorites: [],
	current: {
		id: 0,
		name: '',
		price: 0,
		src: '',
	}
}

export const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts(state, action) {
			state.products = action.payload
		},
		getCurrProduct(state, action) {
			state.current = action.payload
		},
		restoreFavorites(state, action) {
			state.favorites = action.payload;
		},
		addingToFavorite(state, action) {
			state.favorites.push(action.payload)
			localStorage.setItem('product', JSON.stringify(state.favorites))
		},
		deletingFavorite(state, action) {
			localStorage.removeItem('product')
			state.favorites = state.favorites.filter(item => {
				return item.id !== action.payload
			})
			localStorage.setItem('product', JSON.stringify(state.favorites))
		}
	}
})

export const {
	getProducts, addingToFavorite, deletingFavorite, getCurrProduct, restoreFavorites
} = ProductsSlice.actions;

export default ProductsSlice.reducer;