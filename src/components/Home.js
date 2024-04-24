import React from 'react'
import { Typography } from '@mui/material';
import Header from './Header';
import '../css/Home.css'
import {homeImage }from '../utils/homeImage';

const Home = () => {
  return (
 
       <>
         <Header/>
        <div className='home'>
         <img src={homeImage()} width={800} height={400} alt='not found'/> 
        <Typography variant='h4' >Welcome to Student Management App</Typography>
        <Typography variant='h5' >A student management system is designed to record students details </Typography>
        </div>
      
    </>
  )
}

export default Home
