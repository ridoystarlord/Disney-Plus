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

const Details = () => {
    const {id}=useParams()
    const [movieDetails,setMovieDetails]=useState({})

    useEffect(()=>{
        //api calls
    },[id])

    return (
        <Container className='details-container'>
            <Box className='details-body'>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" srcset="" />
            </Box>
            <Box className='details-title'>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" alt="" srcset="" />
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