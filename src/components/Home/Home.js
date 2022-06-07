import { Box } from '@mui/material';
import React from 'react';
import homebg from "../../images/home-background.png"

const Home = () => {
    return (
        <Box sx={{ backgroundImage: `url(${homebg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

        </Box>
    );
};

export default Home;