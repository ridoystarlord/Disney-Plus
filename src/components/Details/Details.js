import { Box,Grid,Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import "./Details.css"
import play from "../../images/play-icon-black.png"
import tailer from "../../images/play-icon-white.png"
import group from "../../images/group-icon.png"
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllMovie } from '../../APIs/Movie';

const Details = () => {
    const {id}=useParams()
    const [movieDetails,setMovieDetails]=useState({})

    useEffect(()=>{
        const filter={
            _id:id,
            idisused:true
        }
        getAllMovie(filter)
            .then(res=>{
                if (res[0]) {
                    setMovieDetails(res[1][0]);
                } else {
                    console.log(res[1]); 
                }
            })
    },[id])


    return (
        <Container className='details-container'>
            <Box className='details-body'>
                <img src={movieDetails?.backgroundimg} alt="" srcset="" />
            </Box>
            <Box className='details-title'>
                <img src={movieDetails?.titleimg} alt="" srcset="" />
            </Box>
            <Box className='details-controls'>
                <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                        <Box className='play-controls'>
                            <img src={play} alt="" srcset="" />
                            <span>Play</span>
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Box className='trailer-controls'>
                            <img src={tailer} alt="" srcset="" />
                            <span>Trailer</span>
                        </Box>
                    </Grid>
                    <Grid item xs={0.5}>
                        <Box className='addtolist'>
                            <span />
                            <span />
                        </Box>
                    </Grid>
                    <Grid item xs={0.5}>
                        <Box className='addtolist' sx={{ml:"0.5rem"}}>
                           <img src={group} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='h6' gutterBottom>{movieDetails?.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='body' gutterBottom>{movieDetails?.description}</Typography>
                    </Grid>
                </Grid>
                
            </Box>
        </Container>
    );
};

export default Details;