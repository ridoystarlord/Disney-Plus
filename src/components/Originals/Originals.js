import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import "./Originals.css"
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../features/movie/movieSlice';

const Originals = () => {
    // const movies = useSelector(selectRecommend);
    return (
        <Container className='my-5'>
            <Typography variant='h5' gutterBottom>Originals</Typography>
            <Grid container spacing={2}>
                {
                    [1,2,3,4].map((movie, key) => (
                      <Grid item xs={12} md={3} lg={3} key={key}>
                        <Box className='recommend-card'>
                            <Link to="/" >
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                            </Link>
                    </Box>
                      </Grid>
                    ))
                }
                {/* <Grid item xs={12} md={3} lg={3}>
                    <Box className='recommend-card'>
                        <Link to="/" >
                            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                        </Link>
                    </Box>
                </Grid> */}
                
            </Grid>
        </Container>
    );
};

export default Originals;