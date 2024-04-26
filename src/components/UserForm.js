import React, { useState} from 'react'
import axios from 'axios'
import '../css/UserForm.css';
import Header from './Header'
import{
    Button,
    TextField,
    Typography,
    Grid,
    Card,
    CardContent} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik}  from 'formik';
import * as yup from 'yup';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const initialState={
  image_url:null,
  name: "",
  rollnumber: "",
  date: null
}
const defaultImage='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'

const validationSchema=yup.object({
image_url: yup
  .mixed()
  .required('Image is required')
  .test('fileFormat', 'Unsupported format', (value) => {
    return value && value.type && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
  }),
  name: yup.string().min(5).max(30).required(),
  rollnumber: yup.number().min(1).required(),
  date: yup.date().required()
  
}) 
const UserForm = () => {
  
  const notify1=()=>toast("New Student Add Successfully");
  const[imagesrc,setImagesrc]=useState(defaultImage);
  
  const formik=useFormik({
    initialValues:initialState,
    validationSchema:validationSchema
  });
 

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagesrc(e.target.result);                             // Set the image source with the result
      formik.setFieldValue('image_url', file);                  // Store the file in formik values
    };
    reader.readAsDataURL(file);
  }}


    const handleSubmit= async()=>{
   try {
      const formdata = new FormData();                          //Create a FormData instance
      formdata.append("name", formik.values.name);
      formdata.append("rollnumber", formik.values.rollnumber);
      formdata.append("date", formik.values.date);
      formdata.append("image_url", formik.values.image_url);       // Append the image file to the form data
  
      await axios.post("http://localhost:8000/api/v1/student/addStudent", formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'          //header for parsing form data
        }
      }).then((response) => {
        console.log(response);
        notify1(); 
        setImagesrc(defaultImage)      
        formik.resetForm();
         
                
        
      }).catch((error) => {
        console.error("Error:", error);
      });
    } catch (error) {
      console.error("Message:", error.message);
    }
  }

 return (
    <>
    <Header/>
  
    <div className='userform'> 
      <ToastContainer/>
         <Card sx={{width:350}}>
           <CardContent sx={{alignItems:'flex-end'}} >
                <Typography
                  sx={{ fontWeight: 'bold' ,fontStyle:"italic"}}>ADD NEW STUDENT
                </Typography>
                <img
                src={imagesrc}
                alt="profile_pic"
                height={150}
                width={150}/>
                <Grid item>
                <TextField 
                //ref={fileInputRef}
                position='absolute'
                type="file"
                name="image"
                onChange={handleImageChange}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image }/>
                 </Grid>
               <br></br>
                <Grid >
                <Grid item sx={{width:"150"}}>
                  <TextField
                   sx={{ width: "100%" }}
                   name="name"
                   label='Student Name'
                   variant='outlined'
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                    placeholder=" Add student name here" required
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name }/>
                </Grid>
                <br></br>
                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Roll Number"
                    name="rollnumber"
                    variant='outlined'
                    value={formik.values.rollnumber} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Add roll number here" required
                    error={formik.touched.rollnumber && Boolean(formik.errors.rollnumber)}
                    helperText={formik.touched.rollnumber && formik.errors.rollnumber }/> 
                </Grid>
                <br></br>
                <Grid item>
                   <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker 
                      sx={{ width: "100%" }}
                      name="date" 
                      label="Date Of Birth"
                      inputFormat="dd.MM.yyyy"
                      value={formik.values.date } // Pass the value from formik
                      onChange={(date) => formik.setFieldValue('date', date)} 
                      onBlur={formik.handleBlur}
                      error={formik.touched.date && Boolean (formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date }/>
                   </LocalizationProvider>
                </Grid>
                <br></br>
                <Grid item>
                    <Button
                      sx={{ width: "100%" }}
                      variant='contained'
                      position='absolute'
                      onClick={()=>handleSubmit()}
                      disabled={(formik.errors.name||formik.errors.rollnumber||formik.errors.date||formik.errors.image_url)||
                      (!formik.values.name ||!formik.values.rollnumber||!formik.values.date||!formik.values.image_url  )}
                      > SUBMIT DETAILS
                    </Button>
                </Grid>
                </Grid>
            </CardContent> 
        </Card>
     </div>
     </>
  )
}

export default UserForm;
