import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


import './styles.css'

export const ProductCard = () => {

    const addFavoriteHandler = () => {

    }

    return (
        <Paper elevation={3} className='productCard'>
            <Box className='productCard__imageWrapper'>
                <img className='productCard__imageWrapper' alt='product' />
            </Box>
            <Box className='productCard__infoWrapper'>
                <Typography className='productCard__infoWrapper-name'>Name</Typography>
                <Box className='productCard__infoWrapper__priceAndButton'>
                    <Typography className='productCard__infoWrapper__priceAndButton-price'>
                        Price
                    </Typography>
                    <FavoriteIcon
                        onClick={addFavoriteHandler}
                        className='productCard__infoWrapper__priceAndButton-button'
                    />
                </Box>
            </Box>
        </Paper>
    );
};