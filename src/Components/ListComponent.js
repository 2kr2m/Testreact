
import styled from '@emotion/styled';
import usePagination from '@mui/material/usePagination/usePagination';
import { Box } from '@mui/system';
import React from 'react'
import JobCard from '../JobCard';
const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    color:'green'
  });
const ListComponent = () => {
    const jobList=[
        {title:'Senior Engineer Manager',company:'Captiosus Axons',review:3,view:'13',experience:4,salary:2300,location:'Monastir',technologies:['React','node js','MongoDb','AWS','Docker']},
        {title:'Senior Engineer Manager',company:'Captiosus Axons',review:3,view:13,experience:4,salary:2300,location:'Monastir',technologies:['React','node js','MongoDb','AWS','Docker']},
        {title:'Senior Engineer Manager',company:'Captiosus Axons',review:3,view:13,experience:4,salary:2300,location:'Monastir',technologies:['React','node js','MongoDb','AWS','Docker']},
        {title:'Senior Engineer Manager',company:'Captiosus Axons',review:3,view:13,experience:4,salary:2300,location:'Monastir',technologies:['React','node js','MongoDb','AWS','Docker']},
        {title:'Senior Engineer Manager',company:'Captiosus Axons',review:3,view:13,experience:4,salary:2300,location:'Monastir',technologies:['React','node js','MongoDb','AWS','Docker']},
      ];
    
      const jobCards=jobList.map((item,pos)=>{
          return <JobCard key={pos} job={item} />
        });
        


    const { items } = usePagination({
        count: 10,
      });
  return (
    <Box sx={{width:'35%',paddingLeft:'2rem',paddingRight:'2rem',marginBottom:'4rem',marginRight:'3%'}}>
        {jobCards}
 <nav>
    <List>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = '…';
        } else if (type === 'page') {
          children = (
            <button
              type="button"
              style={{
                fontWeight: selected ? 'bold' : undefined,
              }}
              {...item}
            >
              {page}
            </button>
          );
        } else {
          children = (
            <button type="button" {...item}>
              {type}
            </button>
          );
        }

        return <li key={index}>{children}</li>;
      })}
    </List>
  </nav>
    </Box>
  
  )
}

export default ListComponent