import React, {useState} from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import FeaturedDeals from '../../components/FeaturedDeals.tsx';

export default function Home(){
    return(
        <Box sx={{
            display:"flex",
            align:"center",
            justifyContent:"center",
            flexDirection:"column",
            margin:4
        }}>
            <Typography variant="h2" color="primary">Game Deals</Typography>
            <FeaturedDeals/>
        </Box>
    )
}