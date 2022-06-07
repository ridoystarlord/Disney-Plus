import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import loginbg from "../../../images/login-background.jpg"
import loginone from "../../../images/cta-logo-one.png"
import logintwo from "../../../images/cta-logo-two.png"

const Login = () => {
    return (
        <Box sx={{ backgroundImage: `url(${loginbg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                <img src={loginone} alt="" srcset="" />
                <Button variant="contained" sx={{ m: 2, width: "60%", py: 1, fontWeight: 700, fontSize: "1.2rem", bgcolor: "#0063e5" }}>GET ALL THERE</Button>
                <Typography variant="body1" sx={{ width: "60%", fontSize: "12px", lineHeight: 1.5, letterSpacing: 1.2, pb: "1.5rem" }}>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Typography>
                <img src={logintwo} alt="" srcset="" width="60%" />
            </Box>
        </Box >
    );
};

export default Login;