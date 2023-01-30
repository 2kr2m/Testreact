import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Icon, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';

const years = [
  {
    value: 0,
    label: '0 years',
  },
 
  {
    value: 10,
    label: '10 years',
  },
];

  

function SearchComponent() {

  return (
    <Box sx={{width:'25%',backgroundColor:'white',paddingLeft:'2rem',paddingRight:'2rem',marginBottom:'4rem',marginRight:'3%'}}>
   
      <Typography><FilterListIcon />All Filters</Typography>


    <FormControl fullWidth>
    <FormLabel id="Freshness-label">Freshness</FormLabel>
    <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    sx={{paddingLeft:'2rem'}}>
    <FormControlLabel value="1" control={<Radio />} label="Last 1 day" />
    <FormControlLabel value="3" control={<Radio />} label="Last 3 day" />
    <FormControlLabel value="7" control={<Radio />} label="Last 7 day" />
    <FormControlLabel value="15" control={<Radio />} label="Last 15 day" />
    </RadioGroup>
    </FormControl>
    <Divider sx={{color:"grey"}}/>
    <FormControl fullWidth>
    <FormLabel id="Job-label">Job Types</FormLabel>
    <FormGroup sx={{paddingLeft:'2rem'}}>
    <FormControlLabel control={<Checkbox />} label="Full-Time" />
    <FormControlLabel control={<Checkbox />} label="Part-Time" />
    <FormControlLabel control={<Checkbox />} label="Contract" />
    <FormControlLabel control={<Checkbox />} label="Intership" />
    </FormGroup>
    </FormControl>

    <Divider sx={{color:"grey"}}/>
    <Typography>Experience</Typography>
    <Slider
        sx={{color:"green"}}
        max={10}
        aria-label="Custom marks"
        defaultValue={1}
        
        step={1}
        valueLabelDisplay="auto"
        marks={years}
      />

    <Divider sx={{color:"grey"}}/>
    
    <FormControl fullWidth>
    <FormLabel id="Job-label">Job Types</FormLabel>
    <FormGroup sx={{paddingLeft:'2rem'}}>
    <FormControlLabel control={<Checkbox />} label="Full-Time" />
    <FormControlLabel control={<Checkbox />} label="Part-Time" />
    <FormControlLabel control={<Checkbox />} label="Contract" />
    <FormControlLabel control={<Checkbox />} label="Intership" />
    </FormGroup>
    </FormControl>

    </Box>
  
  
  )
}

export default SearchComponent