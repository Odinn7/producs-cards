import React from 'react';
import { Box, Modal, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch } from "../../redux/hooks";
import { deletingFavorite } from "../../redux/slices";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CloseIcon from '@mui/icons-material/Close';

import './styles.css'

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const FavoriteProduct = ({product}: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useAppDispatch();

    const imageURL = `https://testbackend.nc-one.com${ product.src }`

    const deleteFavoriteHandler = () => {
        dispatch(deletingFavorite(product.id))
    }

    return (
        <Paper className='favoriteProduct'>
            <Box className='favoriteProduct__imageWrapper'>
                <img className='favoriteProduct__imageWrapper-image' alt='product' src={ imageURL }/>
            </Box>
            <Box className='favoriteProduct__infoWrapper'>
                <Typography sx={ {fontWeight: 400,fontFamily: 'Poppins, '} }>
                    { product.name }
                </Typography>
                <Box className='favoriteProduct__infoWrapper__priceAndButton'>
                    <Typography
                        sx={{fontWeight: 500, fontFamily: 'Poppins', fontSize: '1.3rem'}}
                        className='favoriteProduct__infoWrapper__priceAndButton-price'>
                        $ { product.price }
                    </Typography>
                        <ReadMoreIcon
                            onClick={handleOpen}
                            className='favoriteProduct__infoWrapper__priceAndButton-button'
                        />
                        <Modal
                            open={ open }
                            onClose={ handleClose }
                        >
                            <Box sx={ modalStyle }>
                                <Box className='closeIconWrapper'>
                                <CloseIcon
                                    onClick={ handleClose }
                                    className='closeIconWrapper-closeIcon'
                                />
                                </Box>
                                <Box className='favoriteProduct__imageWrapper'>
                                    <img className='favoriteProduct__imageWrapper-image' alt='product' src={ imageURL }/>
                                </Box>
                                <Box className='favoriteProduct__infoWrapper'>
                                    <Typography sx={ {fontWeight: 600} }>
                                        { product.name }
                                    </Typography>
                                    <Box className='favoriteProduct__infoWrapper__priceAndButton'>
                                        <Typography className='favoriteProduct__infoWrapper__priceAndButton-price'>
                                            $ { product.price }
                                        </Typography>
                                        <FavoriteIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
                    <FavoriteIcon
                        onClick={ deleteFavoriteHandler }
                        className='favoriteProduct__infoWrapper__priceAndButton-button'
                    />
                </Box>
            </Box>
        </Paper>
    );
};

