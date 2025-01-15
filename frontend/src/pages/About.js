import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Fot from "../components/Layout/Fot";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": 
          {fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign:"center"
          },
          
        }}
      >
        <Typography variant="h2">Welcome to IMS Connect System</Typography>
        <p>
        <br/>
        <br/>
        
        <h2>About Our Innovation System</h2>

        Renewing Innovation for a Sustainable Future

At GreenFuture, we are committed to driving meaningful change in the world through cutting-edge solutions in sustainability. Headquartered in London and operating across 20 offices in 15 countries, our 2,500-strong team is dedicated to addressing global environmental challenges. From renewable energy advancements to eco-friendly urban development and policy innovation, GreenFuture has built a reputation as a trailblazer in sustainability.


<br/>
<br/>

<h2>Our Vision</h2>

Recognizing the need to continually evolve, we’ve embraced transformative technology to reignite our innovation engine. With the launch of IMS-Connect, our state-of-the-art Innovation Management System, we’re fostering collaboration across borders, empowering employees to bring their ideas to life, and ensuring a steady flow of groundbreaking projects.

<br/>
<br/>

<ul>
  

</ul>

        </p>
      </Box>
      <Fot/>
    </Layout>
    
  );
};

export default About;