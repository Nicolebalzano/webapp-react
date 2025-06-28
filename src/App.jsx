import axios from "axios"
import { useEffect } from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../pages/Home"
import GuestLayout from "../Layouts/GuestLayout"
import Movies from "../pages/Movies"
import SingleMovie from "../Components/SingleMovie"

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout/>}>
        <Route path="/" element={<Home/>}/>
         <Route path="/movies" element={<Movies/>}/>
           <Route path="/movies/:id" element={<SingleMovie/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
