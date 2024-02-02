import React from 'react';
import { useState } from 'react';
import About from './About';
import Navbar from './Navbar';
import Project from './Project';
import Home from './Home';
import Contact from './Contact'
import {Routes,Route} from 'react-router-dom'
const App = ()=>{
  let [theme,setTheme]=useState("light");
  return(
    <>
    <Navbar themeObj= {{theme , setTheme }}></Navbar>
   <Routes>
    <Route path='/' element={<Home  theme={theme}></Home>}></Route>
    <Route path='/About' element={<About theme={theme}  ></About>}></Route>
    <Route path='/Project' element={<Project theme={theme} ></Project>}></Route>
    <Route path='/Contact' element={<Contact theme={theme} ></Contact>}></Route>
    </Routes> 
</>
  )
}
export default App;