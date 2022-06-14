import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import "./Recommends.css"
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../features/movie/movieSlice';

const Recommends = () => {
    const movies = useSelector(selectRecommend);
    return (
        <Container className='my-5'>
            <Typography variant='h5' gutterBottom>Recommended For You</Typography>
            <Grid container spacing={2}>
                {/* {
                    movies && movies.map((movie, key) => (
                      <Grid item xs={12} md={3} lg={3} key={key}>
                        <Box className='recommend-card'>
                            <Link to={`/detail/` + movie._id} >
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                    </Box>
                      </Grid>
                    ))
                } */}
                {
                    [1,2,3,4].map((movie, key) => (
                      <Grid item xs={12} md={3} lg={3} key={key}>
                        <Box className='recommend-card'>
                            <Link to={`/detail/` + movie._id} >
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
                            </Link>
                    </Box>
                      </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Recommends;