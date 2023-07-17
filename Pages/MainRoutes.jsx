import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
import SignupPage from './SignupPage'
import Login from './Login'
import PostsPage from './PostsPage'
import SinglePage from './SinglePage'
const MainRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/signup" element={<SignupPage/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/posts" element={<PostsPage/>} />
  <Route path="/update/:id" element={<SinglePage/>} />
  <Route path="*" element={<h1>404 Not found page</h1>} />
    </Routes>
  )
}

export default MainRoutes
