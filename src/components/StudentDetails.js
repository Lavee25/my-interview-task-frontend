import React from 'react'
import {
       Typography,
       Card,
       CardContent,
       Grid,
       Box
} from '@mui/material';
const StudentDetails = ({student}) => {
  return (
    <div>

    <Card>
        <CardContent>
              <Typography sx={{ fontWeight: 'bold' ,fontStyle:"italic",textAlign:"center"}}>Student Profile </Typography><br></br>
              <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
               <Grid container direction="column" spacing={2}>
              <Grid item sx={{textAlign:"left",fontWeight:"bold"}}> <Typography >Student Name - {student.name}  </Typography></Grid>
              <Grid item sx={{textAlign:"left"}}> <Typography>Roll Number - {student.rollnumber}      </Typography></Grid> 
              <Grid item sx={{textAlign:"left"}}> <Typography>Date Of Birth - {student.date}   </Typography></Grid>
              <Grid item sx={{textAlign:"left"}}> <Typography>Student Id - {student.id}   </Typography></Grid>
              </Grid>
              <img src={student.profile?.image_url} alt="profile_pic" height={150} width={150}/>
              </Box>
        </CardContent>
    </Card>
   
      
    </div>
  )
}

export default StudentDetails
