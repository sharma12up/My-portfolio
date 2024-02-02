import React from 'react'
import Projectcard from './Projectcard'
import { v4 as uuidv4 } from 'uuid';
import projectsArray from '../assets/Projectinfo'
const Projects = ({theme}) => {
  console.log(theme)
  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , paddingTop:"1%", backgroundColor:theme=="light"?"white":"black" ,minHeight:"100vh"}}>
     {
       projectsArray.map((detailsObj  )=>{
        return <Projectcard theme={theme} key ={uuidv4()} obj={detailsObj}></Projectcard>
       })
     }
    </div>
  )
}

export default Projects