import React from 'react';
import { Box, Typography } from "@mui/material";

import './styles.css'

export const Header = () => {
    return (
        <Box component='header' className='header'>
            <Typography variant="h6" className='header-text'>
                PRODUCT LIST PAGE
            </Typography>
        </Box>
    );
};