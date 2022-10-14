import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
// @ts-ignore
import ReactImageMagnify from 'react-image-magnify';

import './styles.css'


export const CurrentProduct = () => {
	const {current} = useAppSelector(state => state.products)
	
	const imageURL = `https://testbackend.nc-one.com${current.src}`
	
	return (
		<Box sx={{width: '60%'}}>
			{
				current !== null ?
				<Paper className='currentProduct'>
					<Box className='currentProduct__imageWrapper'>
						<ReactImageMagnify
							{...{
								smallImage: {
									alt: "currentProduct",
									isFluidWidth: true,
									src: imageURL,
								},
								largeImage: {
									src: imageURL,
									width: 1000,
									height: 1200
								},
								enlargedImagePosition: "over",
								isHintEnabled: true,
								shouldHideHintAfterFirstActivation: false
							}}
						/>
					</Box>
					<Box className='currentProduct__infWrapper'>
						<Typography
							sx={{
								fontWeight: 400, fontFamily: 'Poppins', fontSize: '1.8rem', mt: 5
							}}>
							{current.name}
						</Typography>
						<Box className='currentProduct__infWrapper__priceAndButton'>
							<Typography
								sx={{fontWeight: 800, fontFamily: 'Poppins', fontSize: '1.3rem'}}
								className='currentProduct__infWrapper__priceAndButton-price'>
								$ {current.price}
							</Typography>
							<FavoriteIcon
								className='currentProduct__infWrapper__priceAndButton-button'
							/>
						</Box>
					</Box>
				</Paper> : <p>No product selected</p>
			}
		</Box>
	);
};
