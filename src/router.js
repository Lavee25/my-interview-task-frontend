import {
    BrowserRouter ,
    Routes,
    Route,
     } from "react-router-dom";
     import Home from './components/Home'
     import UserForm from "./components/UserForm";
     import UserList from "./components/UserList";
   


   function AppRouter(){
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/"element={<Home/>}/>
             <Route path="/addStudent" element={<UserForm/>}/>   
             <Route path="/getStudentDetails" element={<UserList/>}/>
            
         </Routes>
        </BrowserRouter>
      
      </>
    )
    }

   
   export default AppRouter;