

import axios from "axios";
import { AppDispatch } from "./store";
import { getProducts } from "./slices";

const baseURL = 'https://testbackend.nc-one.com/image';

export const productsFetchingAction = () =>  async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(baseURL);
        dispatch(getProducts(response.data))
    } catch (error) {
        console.warn("FETCHING ERROR =>>>>",error)
    }
}


export const oneProductsFetchingAction = (id: number) =>  async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${baseURL}?id={id}`);
        dispatch((response.data))
    } catch (error) {
        console.warn("FETCHING ERROR =>>>>",error)
    }
}