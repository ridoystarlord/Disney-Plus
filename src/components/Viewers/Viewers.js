import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import viewImg1 from "../../images/viewers-disney.png"
import viewImg2 from "../../images/viewers-pixar.png"
import viewImg3 from "../../images/viewers-marvel.png"
import viewImg4 from "../../images/viewers-starwars.png"
import viewImg5 from "../../images/viewers-national.png"
import video1 from "../../videos/1564674844-disney.mp4"
import video2 from "../../videos/1564676714-pixar.mp4"
import video3 from "../../videos/1564676115-marvel.mp4"
import video4 from "../../videos/1608229455-star-wars.mp4"
import video5 from "../../videos/1564676296-national-geographic.mp4"
import "./Viewers.css"
import { Box } from '@mui/system';

const Viewers = () => {
    return (
        <Container className='my-3'>
            <Grid container spacing={2} sx={{diplay:"flex", justifyContent:"center"}}>
                <Grid item xs={12} md={3} lg={2}>
                    <Box className="imgCard">
                        <img width="100%" src={viewImg1} alt="" />
                        <video autoPlay loop playsInline muted>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Box className="imgCard">
                        <img width="100%" src={viewImg2} alt="" />
                        <video autoPlay loop playsInline muted>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Box className="imgCard">
                        <img width="100%" src={viewImg3} alt="" />
                        <video autoPlay loop playsInline muted>
                            <source src={video3} type="video/mp4" />
                        </video>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Box className="imgCard">
                        <img width="100%" src={viewImg4} alt="" />
                        <video autoPlay loop playsInline muted>
                            <source src={video4} type="video/mp4" />
                        </video>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Box className="imgCard">
                        <img width="100%" src={viewImg5} alt="" />
                        <video autoPlay loop playsInline muted>
                            <source src={video5} type="video/mp4" />
                        </video>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Viewers;