import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch } from "../../redux/hooks";
import { deletingFavorite } from "../../redux/slices";
import { currProductFetchingAction } from "../../redux/actionCreators";
import { Link } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";

import './styles.css'


export const FavoriteProduct = ({favorite}: {favorite: IProduct}) => {
	
	const imageURL = `https://testbackend.nc-one.com${favorite.src}`
	const dispatch = useAppDispatch();
	
	const deleteFavoriteHandler = () => {
		dispatch(deletingFavorite(favorite.id))
	}
	
	const showFavoriteProduct = () => {
		dispatch(currProductFetchingAction(favorite.id));
	}
	
	return (
		<Paper className='favoriteProduct'>
			<Box className='favoriteProduct__imageWrapper'>
				<Link to='/product'>
					<img
						onClick={showFavoriteProduct}
						className='favoriteProduct__imageWrapper-image' alt='favorite'
						src={imageURL}
					/>
				</Link>
			</Box>
			<Box className='favoriteProduct__infoWrapper'>
				<Typography sx={{fontWeight: 400, fontFamily: 'Poppins, '}}>
					{favorite.name}
				</Typography>
				<Box className='favoriteProduct__infoWrapper__priceAndButton'>
					<Typography
						sx={{fontWeight: 500, fontFamily: 'Poppins', fontSize: '1.3rem'}}
						className='favoriteProduct__infoWrapper__priceAndButton-price'>
						$ {favorite.price}
					</Typography>
					<FavoriteIcon
						onClick={deleteFavoriteHandler}
						className='favoriteProduct__infoWrapper__priceAndButton-button'
					/>
				</Box>
			</Box>
		</Paper>
	);
};

