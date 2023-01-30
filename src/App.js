

import React, { useState } from 'react';

import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import SearchComponent from './Components/SearchComponent';
import ListComponent from './Components/ListComponent';
import RightSideBar from './Components/RightSideBar';



export default function App(){



  const theme = createTheme({
      palette: {
        primary: {
          main: grey[800],
        },
        background:{
          paper:"#bdbdbd",
        }
      },
    });  
  
  return(
   
    <ThemeProvider theme={theme}>
      
      <Header />
      <Divider sx={{color:"grey"}}/>
      
        <Box  sx={{display: 'flex', flexDirection: 'row', padding:'1rem',backgroundColor:'#f9f8f8'}}>
          <SearchComponent />
          <ListComponent />
          <RightSideBar />
        </Box>    
      
        
      
      
    </ThemeProvider>
   

    
    
    
  )
  
}
