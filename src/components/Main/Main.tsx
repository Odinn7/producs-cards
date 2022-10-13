import React from 'react';
import { Box } from "@mui/material";
import { Favorites } from "../Favorites/Favorites";
import { Products } from "../Products/Products";


import './styles.css'


export const Main = () => {
    return (
        <Box component='main' className='main'>
            <Favorites/>
            <Products/>
        </Box>
    );
};