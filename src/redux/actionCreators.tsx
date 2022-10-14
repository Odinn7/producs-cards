import axios from "axios";
import { AppDispatch } from "./store";
import { getCurrProduct, getProducts } from "./slices";


const baseURL = 'https://testbackend.nc-one.com/image';

export const productsFetchingAction = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get(baseURL);
		dispatch(getProducts(response.data))
	} catch (error) {
		console.warn("productsFetchingAction ERROR =>>>>", error)
	}
}
export const currProductFetchingAction = (id: number) => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get(`${baseURL}?id=${id}`);
		dispatch(getCurrProduct(response.data))
	} catch (error) {
		console.warn("currProductFetchingAction ERROR =>>>>", error)
	}
}
