import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function RightSideBar() {
  return (
    <Box sx={{width:'30%'}}>
        <Box sx={{backgroundColor:'white',marginBottom:'1rem',padding:'10px'}}>
            <Typography variant='h5' sx={{marginBottom:'10px'}}>Get Presonalised Job Recommondations</Typography>
            <Typography fontSize={'15px'} sx={{marginBottom:'10px'}}>Registering giving you the chance to browse & apply variety of jobs based on your preferences.</Typography>
            <Button color='success' variant='contained' sx={{width:'100%',display:'block'}}>Register Now</Button>
        </Box>
        <Box sx={{backgroundColor:'white',marginBottom:'1rem',padding:'10px'}}>
            <Typography variant='h5' sx={{marginBottom:'10px'}}>About Producer of this App</Typography>
            <Typography fontSize={'15px'} sx={{marginBottom:'10px'}}>Captiosus Axons created in 2020 specialized in the field of artificial intelligence,Big data,web development,mobile development .</Typography>
            <Button color='success' variant='contained' sx={{width:'100%',display:'block'}}>See More</Button>
        </Box>
    </Box>
  )
}

export default RightSideBar