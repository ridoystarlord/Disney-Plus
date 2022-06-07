import { Box } from '@mui/material';
import React from 'react';
import homebg from "../../images/home-background.png"
import ImageSlider from '../ImageSlider/ImageSlider';
import Viewers from '../Viewers/Viewers';

const Home = () => {
    return (
        <Box sx={{ backgroundImage: `url(${homebg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",top:72 }}>
            <ImageSlider />
            <Viewers />
        </Box>
    );
};

export default Home;