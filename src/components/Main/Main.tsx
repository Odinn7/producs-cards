import React from 'react';
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { Favorites } from "../Favorites/Favorites";
import { Products } from "../Products/Products";
import { CurrentProduct } from "../CurrentProduct/CurrentProduct";

import './styles.css'


export const Main = () => {
	return (
		<Box component='main' className='main'>
			<Favorites/>
			<Routes>
				<Route path='/' element={<Products/>}/>
				<Route path='/product' element={<CurrentProduct/>}/>
			</Routes>
		</Box>
	);
};