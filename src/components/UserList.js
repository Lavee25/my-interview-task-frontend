import React, { useState,useEffect,useCallback } from 'react'
import Header from './Header';
import{Button} from '@mui/material';
//import '../css/UserList.css'
import StudentDetails from './StudentDetails';
import axios from 'axios';



const UserList = () => {
  const[studentdata,setStudentdata]=useState({});
  const [page,setPage] = useState(1);             
  const [totalRecords, setTotalRecords] = useState(0);

const handleclick = useCallback(async()=>{
  try{
    const response=await axios.get(`http://localhost:8000/api/v1/student/getdata?page=${page}`);
     if (Array.isArray(response.data.data)) {
        setStudentdata(response.data.data);
        setTotalRecords(response.data.totalRecords);
        
    } else {
      console.error("Data is  not Array");
    }
  }catch(error){
    console.error("Error:", error.message);
  }
 
},[page]);

  useEffect(() => {
   handleclick();       // Fetch data when page changes
  }, [handleclick]);


const handleNextPage = () => {
  setPage((prevPage) => prevPage + 1);
};

const handlePreviousPage = () => {
  if (page > 1) {
    setPage((prevPage) => prevPage - 1);
  }
};




  
    return (
        <>  
        <Header/>
         <div className='list'>
          
        <Button
          onClick={handlePreviousPage}
          variant='contained'
          disabled={page <= 1} // Disable if on the first page
        >
          Previous Page
        </Button>
        <Button
          variant='contained'
          onClick={handleNextPage}
          disabled={page * 5 >= totalRecords} // Disable if on the last page
        >
          Next Page
        </Button>
      </div>
        {Array.isArray(studentdata) && studentdata.map((student)=>(
        <StudentDetails
        student={student}
        />))}

      
    </>
  )
}

export default UserList
