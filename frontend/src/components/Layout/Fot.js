import React from "react";
import Insta from "@mui/icons-material/Instagram";
import Tweet from "@mui/icons-material/Twitter";
import Hub from "@mui/icons-material/GitHub";
import Youtube from "@mui/icons-material/YouTube";
import { Typography, Box } from "@mui/material";  


const Fot = () => {
  return (
    <>
      <Box
        sx={{ 
          textAlign: "center",
          color: "white", 
          p: 3 }}>
        
      
        <Box
          sx={{
            my: 3,
            "& svg": {   //Describing and reshaping the vector of the footer
              fontSize: "60px", //Font sise of the footer
              cursor: "pointer", 
              mr: 2,
            },
            "& svg:hover": {       //Focus on mouse hovering
              color: "goldenrod", //The colour in which the social media icons will be when user uses mouse to hover over them
            },
          }}
        >
          
          
          <Insta/>
      <Hub/>
      <Youtube/>
      <Tweet/>
        </Box>
        <Typography
          Wordfonts="h3"       
          textAlign= "center"  //Text aligned in the centre
          color= "white"   //Colour of the typography which are words in the footer
          sx={{
              fontSize: "3rem",  
            
          }}
        >
        <h6>Rights are all reserved </h6>
        </Typography>
      </Box>

      
      
    </>
  );
};

export default Fot;
