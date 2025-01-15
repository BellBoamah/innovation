import React from "react";
import Layout from "./../components/Layout/Layout";
import CallIcon from "@mui/icons-material/Call";
import{Paper} from "@mui/material";
import{TableCell} from "@mui/material";
import{Table} from "@mui/material";
import{TableBody} from "@mui/material";
import{Typography} from "@mui/material";
import{TableRow} from "@mui/material";
import{TableContainer} from "@mui/material";
import{TableHead} from "@mui/material";
import{Box} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";  /**Importing from the Material UI Components */

import Fot from "../components/Layout/Fot";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my /*Using both margin top and bottom*/: 13, marginLeft: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Information</Typography>
        <p>
        Let’s Build a Sustainable Future Together

Whether you’re looking to collaborate, learn more about our services, or discuss innovative sustainability solutions, we’d love to hear from you!

Head Office:
GreenFuture
123 Sustainability Way
London, UK</p>
      </Box>
   
      <Box
        sx={{
          m: 3,     /*Im using all the margin components*/
          width: "600px",
          marginLeft: 10,
          "@media (max-width:800px)": {
            width: "500px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }} align="center">
                  
                
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "gold", pt: 1 }} /> 33145712@uwl.ac.uk
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "gold", pt: 1 }} /> 0209300309032
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Fot/>
      

    </Layout>
  );
};

export default Contact;