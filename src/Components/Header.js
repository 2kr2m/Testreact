
import {Link,Button,Box, Typography, Icon} from '@mui/material'
export default function Header(){
  
        return(
            
               <Box  sx={{display: 'flex', flexDirection: 'row',textAlign:'center',  boxShadow: '0px 0px 6px #888888', padding:'1rem',backgroundColor:'white'}}>
               <Box sx={{width:'33%'}}>
                <Typography variant='h6'>Logo</Typography>
                </Box>
                 
                <Box sx={{width:'33%'}}>
                     
                 <Button >Home</Button>
                 <Button>Jobs</Button>
                 <Button>About Us</Button>
                 <Button>Contact</Button>
                </Box> 
                
                 
                 <Box sx={{width:'33%'}}>
                 <Button >Sign in</Button>
                 <Button variant="contained">Create Account</Button>
                 </Box>
               </Box>
                
                
               
    

        )
}
