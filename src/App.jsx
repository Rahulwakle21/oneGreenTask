import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllUserList from "./component/AllUserList"
import SingleUserDetails from "./component/SingleUserDetails"
import UserForm from "./component/UserForm"

function App() {

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUserList/>}/>
        <Route path="/users/:id" element={<SingleUserDetails/>}/>
        <Route path="/usersform" element={<UserForm />}/>
      </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
