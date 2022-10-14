import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductsReducer from "./slices";


const rootReducer = combineReducers({
	products: ProductsReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']