import React, { useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { FavoriteProduct } from "../FevoriteProduct/FavoriteProduct";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { restoreFavorites } from "../../redux/slices";

import './styles.css'


export const Favorites = () => {
	
	const dispatch = useAppDispatch();
	const {favorites} = useAppSelector(state => state.products);
	
	useEffect(() => {
		const productsStr = localStorage.getItem('product')
		if (productsStr == null) {
			return;
		}
		const products = JSON.parse(productsStr);
		dispatch(restoreFavorites(products));
	}, [dispatch])
	
	return (
		<Box component='aside' className='favorites'>
			<Typography
				sx={{
					fontFamily: "Anek Telugu, sans-serif",
					fontWeight: 600,
					fontSize: '1.8rem'
				}}>
				Favorites
			</Typography>
			
			<Box>
				{
					favorites.map(
						favorite => <FavoriteProduct key={favorite.id} favorite={favorite}/>
					)
				}
			</Box>
		</Box>
	);
};