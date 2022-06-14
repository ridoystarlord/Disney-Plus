import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import homebg from "../../images/home-background.png"
import ImageSlider from '../ImageSlider/ImageSlider';
import NewDisney from '../NewDisney/NewDisney';
import Originals from '../Originals/Originals';
import Recommends from '../Recommends/Recommends';
import Trending from '../Trending/Trending';
import Viewers from '../Viewers/Viewers';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(()=>{
        //get all movies
        dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
    },[userName])

    return (
        <Box sx={{ backgroundImage: `url(${homebg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",top:72 }}>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Box>
    );
};

export default Home;