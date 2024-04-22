import React from 'react'
import { AppBar,Toolbar } from '@mui/material'


const Header = () => {
  //const classes=useStyles();
  return (
 <React.Fragment>
     <AppBar position="static" sx={{height:"60px",marginTop:"5px",marginBottom:"10px",backgroundImage:"linear-gradient(to right red blue)"}}>
     <Toolbar>

     </Toolbar>
    </AppBar>
 </React.Fragment>
  )
}

export default Header
