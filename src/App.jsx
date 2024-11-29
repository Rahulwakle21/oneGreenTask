import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllUserList from "./component/AllUserList"
import SingleUserDetails from "./component/SingleUserDetails"
import UserForm from "./component/UserForm"
import { useState } from "react";


function App() {
  const [users, setUsers] = useState([]); // Shared state for users

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUserList/>}/>
        <Route path="/users/:id" element={<SingleUserDetails/>}/>
        <Route path="/usersform" element={<UserForm onAddUser={handleAddUser}/>}/>
      </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
