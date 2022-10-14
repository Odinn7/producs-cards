import React from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import './styles.css'


export const Header = () => {
	return (
		<Box component='header' className='header'>
				<Link to='/' className='link'>
					PRODUCT LIST PAGE
				</Link>
		</Box>
	);
};