import React from 'react';
import "./Home.css"
import {Link} from "react-router-dom"
const Home = ({theme}) => {
  let darkImage="url(../assets/dark.jpg)";
   let lightImage="url(../assets/bgimage.jpg)";
  return (
    <div className='mainContainer' style={{backgroundImage:theme=="light"?lightImage:darkImage , color:theme=="light"?"black":"white"}} >
      <div className="textPart" style={{fontSize:"2rem" , fontWeight:"500"}}>
        <main class="container" style={{ height:"25%"}}>
          <p>Hello 👋 I'm <br />
          govind </p>
          <section class="animation">
            <div class="first"><div> Front end </div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>Java Enthusiast</div></div>
          </section>
        </main>
        <div className="aboutMe">
          <Link to="/about"> <button type="button" className="btn btn-warning btn-lg glow">AboutMe</button> </Link>
        </div>
        <div className="socialCircle">
          <a target="_blank" href="" className="logoAnchor"><img style={{backgroundColor:theme=="light"?"transparent":"white"}} className="logo" src="../assets/github.svg"></img></a>
          <a target="_blank" href="" className="logoAnchor"><img style={{backgroundColor:theme=="light"?"transparent":"white"}} className="logo" src="../assets/instagram.svg"></img></a>
          <a target="_blank" href="" className="logoAnchor"><img style={{backgroundColor:theme=="light"?"transparent":"white"}} className="logo" src="../assets/linkedin.svg"></img></a>
          <a target="_blank" href="" className="logoAnchor"><img style={{backgroundColor:theme=="light"?"transparent":"white"}} className="logo" src="../assets/telegram.svg"></img></a>
          <a target="_blank" href="" className="logoAnchor"><img style={{backgroundColor:theme=="light"?"transparent":"white"}} className="logo" src="../assets/twitter.svg"></img></a>
        </div>
      </div>
      <div className="avatarPart">
        <img src="../assets/avtar.jpeg.jpg" className="avatar"></img>
      </div>
    </div>
  )
}

export default Home
