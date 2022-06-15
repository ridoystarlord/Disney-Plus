import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import "./Originals.css"
import { useSelector } from 'react-redux';
import { selectOriginal } from '../../features/movie/movieSlice';

const Originals = () => {
    const movies = useSelector(selectOriginal);
    return (
        <Container className='my-5'>
            <Typography variant='h5' gutterBottom>Originals</Typography>
            <Grid container spacing={2}>
                {
                    movies && movies.map((movie, key) => (
                      <Grid item xs={12} md={3} lg={3} key={key}>
                        <Box className='recommend-card'>
                            <Link to={`/detail/` + movie._id} >
                                <img src={movie.cardimg} alt={movie.title} />
                            </Link>
                    </Box>
                      </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Originals;