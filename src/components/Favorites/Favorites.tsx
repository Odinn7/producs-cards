import React from 'react';
import { Box, Typography } from "@mui/material";


import './styles.css'

export const Favorites = () => {
    return (
        <Box  component='aside' className='favorites'>
            <Typography className='favorites-header'>Favorites</Typography>
        </Box>
    );
};