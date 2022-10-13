import React from 'react';
import { Box, Typography } from "@mui/material";
import { FavoriteProduct } from "../FevoriteProduct/FavoriteProduct";
import { useAppSelector } from "../../redux/hooks";


import './styles.css'

export const Favorites = () => {

    const {favorites} = useAppSelector(state => state.products);

    return (
        <Box component='aside' className='favorites'>
            <Typography
                sx={ {
                    fontFamily: "Anek Telugu, sans-serif",
                    fontWeight: 600,
                    fontSize: '1.8rem'
                } }>
                Favorites
            </Typography>

            <Box>
                {
                    favorites.map(product => <FavoriteProduct key={ product.id } product={ product }/>)
                }
            </Box>
        </Box>
    );
};