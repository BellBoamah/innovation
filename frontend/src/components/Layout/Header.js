import React,{useState} from 'react'
import {Box} from '@mui/material'
import {Drawer} from '@mui/material'
import {AppBar} from '@mui/material'
import {IconButton} from '@mui/material'
import {Toolbar} from '@mui/material'
import {Typography} from '@mui/material'



import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderEdit.css";

const Header = () => {
  const [display, setdisplay] = useState(false)

  const open =() => {
    setdisplay(!display)
  }
  

  const sidebar =(
    <Box onClick={open} sx={{textAlign: 'center'}} >

       <Typography 
        color={'goldenrod'} 
        variant="h4" component="div"
        sx={{flexGrow: 1}}
        >


          IMS
          </Typography>
          <ul className="sidemenu">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/Idea"}>Idea</NavLink>
        </li>

        

        
       
        
      </ul>
      <EmojiObjectsIcon/>

    </Box>
  );


  return (

    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor: "navy"}}>
        <Toolbar>
          <IconButton 
          aria-label="white" 
          sx={{mr:2, 
          display:{sm:"none"}
          }}
            onClick={open}

            >
            <MenuIcon/>

          </IconButton>

        <Typography 
        color={'goldenrod'} 
        variant="h6" component="div"
        sx={{flexGrow: 1}}>
          <EmojiObjectsIcon/>

          GREEN FUTURE
          </Typography>
          <Box>
          <ul className="sidemenutwo">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
              <NavLink to={"/Idea"}>Idea Submission</NavLink>
                 </li>

               

                 <li>
                 </li>
              </ul>

              </Box>


        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant= "temporary" 
        open={display} 
        onClose={open}
        >
          {sidebar}
        </Drawer>
      </Box>

    </Box>

    
    
    </>
  )
}

export default Header
