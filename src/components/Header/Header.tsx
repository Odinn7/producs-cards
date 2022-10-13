import React from 'react';
import { Box, Typography } from "@mui/material";

import './styles.css'

export const Header = () => {
    return (
        <Box component='header' className='header'>
            <Typography
                variant="h6"
                sx={ {
                    fontFamily: "Anek Telugu, serif",
                    fontWeight: 600,
                    fontSize: '1.8rem'
                } }>
                PRODUCT LIST PAGE
            </Typography>
        </Box>
    );
};