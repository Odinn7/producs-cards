import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch } from "../../redux/hooks";
import { addingToFavorite } from "../../redux/slices";
import { IProduct } from "../../../types/IProduct";

import './styles.css'


export const ProductCard = ({product}: {product: IProduct}) => {
	
	const dispatch = useAppDispatch();
	const imageURL = `https://testbackend.nc-one.com${product.src}`
	
	const addFavoriteHandler = () => {
		dispatch(addingToFavorite(product))
	}
	
	return (
		<Paper elevation={3} className='productCard'>
			<Box className='productCard__imageWrapper'>
				<img className='productCard__imageWrapper-image' alt='product' src={imageURL}/>
			</Box>
			<Box className='productCard__infoWrapper'>
				<Typography className='productCard__infoWrapper-name'>
					{product.name}
				</Typography>
				<Box className='productCard__infoWrapper__priceAndButton'>
					<Typography
						sx={{fontWeight: 600, fontFamily: 'Poppins', fontSize: '1.3rem'}}
						className='productCard__infoWrapper__priceAndButton-price'
					>
						$ {product.price}
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