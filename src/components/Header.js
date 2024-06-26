import React from 'react'
import { AppBar,Toolbar} from '@mui/material'
import {Link }from 'react-router-dom';
import { Home as HomeIcon } from '@mui/icons-material'


const Header = () => {
  
  return (
 <React.Fragment>
     <AppBar position="static" sx={{backgroundColor:"transparent",height:"60px",marginTop:"5px",marginBottom:"10px"}}>
      <Toolbar>
        <Link to="/"  style={{color:"white"}}><HomeIcon/></Link>
        <Link to ="/addStudent" style={{ marginLeft: 'auto',color:"black",textDecoration:'none' }}>ADD STUDENT</Link>
        <Link to ="/getStudentDetails"  style={{marginLeft:"20px",color:"black",textDecoration:'none' }}> STUDENTS LIST</Link>
        <Link to ="/search" style={{marginLeft:"20px",color:"black",textDecoration:'none' }}> SEARCH</Link>
      </Toolbar>
    </AppBar>
 </React.Fragment>
  )
}

export default Header
