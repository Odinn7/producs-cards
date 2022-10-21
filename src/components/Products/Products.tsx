import React, { useEffect } from 'react';
import { ProductCard } from "../ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productsFetchingAction } from "../../redux/actionCreators";
import { FixedSizeGrid as Grid } from 'react-window';

import './styles.css'


export const Products = () => {
	const dispatch = useAppDispatch();
	const {products} = useAppSelector(state => state.products);
	
	useEffect(() => {
		dispatch(productsFetchingAction());
	}, []);
	
	const Cell = () => (
		<div style={{display: 'flex', flexWrap: 'wrap', flexBasis: 1}}>
			{
				products.map(product => <ProductCard key={product.id} product={product}/>)
			}
		</div>
	);
	
	return (
		<Grid
			className='products'
			columnCount={1}
			columnWidth={380}
			
			rowCount={1}
			rowHeight={800}
			
			height={835}
			width={1200}
		>
			{Cell}
		</Grid>
	);
};