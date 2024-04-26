import {
    BrowserRouter ,
    Routes,
    Route,
     } from "react-router-dom";
     import Home from './components/Home'
     import UserForm from "./components/UserForm";
     import UserList from "./components/UserList";
     import Student from "./components/Student";
   


   function AppRouter(){
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/"element={<Home/>}/>
             <Route path="/addStudent" element={<UserForm/>}/>   
             <Route path="/getStudentDetails" element={<UserList/>}/>
             <Route path="/search"element={<Student/>}/>
            
         </Routes>
        </BrowserRouter>
      
      </>
    )
    }

   
   export default AppRouter;