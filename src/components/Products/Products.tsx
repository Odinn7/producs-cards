import React, { useEffect } from 'react';
import { ProductCard } from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productsFetchingAction } from "../../redux/actionCreators";


import './styles.css'


export const Products = () => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(productsFetchingAction())
    }, [])

    return (
        <Box className='products'>
            {
                products.map(product => <ProductCard product={ product }/>)
            }
        </Box>
    );
};