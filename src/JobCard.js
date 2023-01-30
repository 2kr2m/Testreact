import React from "react"

import {Box, Button, Typography} from '@mui/material' 
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { AttachMoney, BusinessCenterOutlined, LocationOn, LocationOnOutlined, ReviewsOutlined } from "@mui/icons-material";
import Tech from "./Components/Tech";

export default function JobCard(props){
    const tech=props.job.technologies.map((item,pos)=>{
        return <Tech key={pos} tech={item} />
      });
    return(
        <Box sx={{boxSizing: 'border-box',
        borderRadius: '5px',
        boxShadow: '0 2px 5px grey',
        marginBottom:'2rem',
        backgroundColor:'white',
        padding:'10px',}}>
             <Box sx={{
            display: 'inline-flex'
            }}>
           <Box sx={{width:'65%',padding:'10px'}}>
           
           <Box sx={{display: 'block'}}>
                <Typography variant="h6" >{props.job.title} </Typography>
         
                
            </Box>

            <Box sx={{display: 'inline-flex'}}>
               <Typography sx={{fontSize:"15px"}}>{props.job.company} </Typography><StarRateIcon fontSize="small"  sx={{marginLeft:'1rem',marginRight:'5px',color:"yellow"}} />({props.job.review} Reviews) 
            </Box>
            <Box sx={{display: 'block'}}>
               <BusinessCenterOutlined fontSize="small" sx={{marginRight:'5px'}}/> {props.job.experience} yrs
               <AttachMoney fontSize="small" sx={{marginLeft:'1rem',marginRight:'5px'}} />{props.job.salary}
               <LocationOn fontSize="small" sx={{marginLeft:'1rem',marginRight:'5px'}} />{props.job.location} 
               
            </Box >
            
            <Box sx={{  display: 'flex',
  flexWrap: 'wrap',
  placeItems: 'start'}}>
                {tech}
            </Box>
           </Box>       
 

           
           
           <Box sx={{width:'35%'}}>
           <Box >         
                <Typography fontSize={'10px'} fontWeight={'bold'}><VisibilityIcon fontSize="small" /> {props.job.view} Viewers <FavoriteBorderIcon fontSize="small" /> Save</Typography>   
           </Box>
           
  
           </Box>
           

           

           
        </Box>
        <Box sx={{placeContent: 'end',display:'block',position:'relative',left:'65%'}}>  
           <Button  variant="outlined" color="success" sx={{marginRight:"4px",width:'10px',length:'5px',fontSize:'10px',fontWeight:'bold'}}>
               <VisibilityIcon fontSize="small"  sx={{marginRight:"4px"}}/>
                 View
           </Button>
           <Button   variant="contained" color="success" sx={{width:'10px',fontSize:'10px',fontWeight:'bold'}}>
           <SendIcon fontSize="small" />
                  Apply
               
           </Button>
           </Box> 
        </Box>
        
    )
}