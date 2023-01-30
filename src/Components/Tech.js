import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Tech(props) {
  return (
    <Box>
        <Button  variant="contained" sx={{fontSize:'5px',marginRight:"5px",backgroundColor:"#b1bdc1"}}>{props.tech}</Button>
    </Box>
  )
}

export default Tech