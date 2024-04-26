import React,{useState} from 'react'
import Header from './Header';
import axios from 'axios'
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Box,
    TextField,
    Button
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import StudentDetails from './StudentDetails';
import SearchIcon from '@mui/icons-material/Search';


const Student = () => {
    const notify=()=>toast(`Students WithName "${name}" found Successfully`);
    const[studentdata,setStudentdata]=useState([]);
    const[name,setName]=useState('');
  
const fetchStudentData = async (name) => {
    if (name.trim() === '') return; // If name is empty, don't make the API call
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/student/getsingledata?name=${name}`);
      
      setStudentdata(response.data.data);
      notify()
      setName('');
      

    } catch (error) {
      console.error("Error fetching student data:", error.message);
      setStudentdata(null); // Clear data if there's an error
    }
  };




  return (
      <>
      <Header/>
     <div>
        <ToastContainer/>
          <Card>
            <CardContent>
                 <Typography sx={{ fontWeight: 'bold' ,fontStyle:"italic",textAlign:"center"}}>Find Student Data</Typography>
                 <br></br>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Grid>
                <Grid item>
                  <TextField
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    sx={{ width: "100%" }}
                    label="Student Name"
                    name="name"
                    variant='outlined'/>
                    </Grid>
                </Grid>
                <Button size="medium" onClick={()=>{fetchStudentData(name)}}> <SearchIcon fontSize='medium'/></Button> 

                </Box>
                </CardContent>
          </Card>
    


      
    </div>
  <br></br>
{studentdata.map((student)=>(<StudentDetails
student={student}
/>
))


}
</>
  )
}

export default Student
