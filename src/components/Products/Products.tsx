import React from 'react';
import { ProductCard } from "../ProductCard/ProductCard";
import { Box } from "@mui/material";


import './styles.css'


export const Products = () => {
    return (
        <Box className='products'>
            <ProductCard />
        </Box>
    );
};