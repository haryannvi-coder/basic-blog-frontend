import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AddBlog } from './pages/AddBlog'
import { ReadBlog } from './pages/ReadBlog'
import { EditBlog } from './pages/EditBlog'
import { DeleteBlog } from './pages/DeleteBlog'
import { Logout } from './pages/Logout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/readBlog" element={<ReadBlog />} />
          <Route path="/editBlog" element={<EditBlog />} />
          <Route path="/deleteBlog" element={<DeleteBlog />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}



export default App
