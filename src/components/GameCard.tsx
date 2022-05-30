import React, {useEffect, useState} from 'react';
import {
    Paper,
    Box,
    Typography,
    Stack
} from '@mui/material';
import {Game} from '../utils/types/Game.ts';

export default function GameCard(props){

    return(
        <Box sx={{width:"100%", height:"400px"}}>
            <Paper elevation={2} sx={{padding:2, textAlign: 'center', margin:4, height:"100%"}}>
                <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h6">{props.game.title}</Typography>
                    <Box component="img" src={props.game.thumb}  sx={{maxHeight:"200px", width:"fit-content"}}/>
                    {props.game.steamRatingCount === "0" ?
                    <></>
                    :
                    <Typography variant="body1">{props.game.steamRatingCount} {props.game.steamRatingText} Reviews</Typography>
                    }
                    <Typography variant="body1">MSRP: £{props.game.normalPrice}</Typography>
                    <Typography variant="body1">Sale Price: £{props.game.salePrice}</Typography>
                </Stack>
            </Paper>
        </Box>
    )
}