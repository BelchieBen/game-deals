import React, {useState, useEffect} from 'react';
import {List12Deals} from '../utils/endpoints.ts';
import axios from 'axios';
import { 
    Box,
    Stack,
    Paper,
    Button
} from '@mui/material';
import GameCard from './GameCard.tsx';
import Carousel from 'react-material-ui-carousel'

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.title}</h2>
            <Box component="img" src={props.item.thumb} sx={{height:"400px"}}/>
        </Paper>
    )
}

export default function FeaturedDeals(){
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(List12Deals)
            .then((res) => {
                console.log(res);
                setGames(res.data);
            })
    }, [])

    const sliderItems: number = games.length > 3 ? 3 : games.length;
    const items: Array<any> = [];

    for(let i = 0; i < games.length; i += sliderItems){
        if(i % sliderItems === 0){
            items.push(
                <Stack direction="row" key={i} id="ItemsStack">
                    {games.slice(i, i + sliderItems).map((game, index) => {
                        return(
                            <GameCard key={index} game={game}/>
                        )
                    })}
                </Stack>
            );
        }
    }

    return(
        <Box>
            {games.length === 0 ? <Box></Box>: 

            <Carousel animation="slide" navButtonsAlwaysVisible={true} duration={1000} interval={8000}>
                {items}
            </Carousel>
            
            // <Box sx={{display: 'flex', flexWrap: 'wrap'}}> 
            // {games.map(game => {
            //     return(  
            //         <GameCard game={game} />
            //     )
            // })}
            // </Box>
            }
        </Box>
    )
}