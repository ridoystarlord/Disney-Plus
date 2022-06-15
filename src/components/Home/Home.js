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
import { getAllMovie } from '../../APIs/Movie';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(()=>{
        getAllMovie({})
        .then(res=>{
            if (res[0]) {
                console.log(res[1]);
                dispatch(
                    setMovies({
                      recommend: res[1].filter(item=>item.type==="recommend"),
                      newDisney: res[1].filter(item=>item.type==="new"),
                      original: res[1].filter(item=>item.type==="original"),
                      trending: res[1].filter(item=>item.type==="trending"),
                    })
                  );
            } else {
                console.log(res[1]); 
            }
        })

        
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