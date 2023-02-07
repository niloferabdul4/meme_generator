import React from "react";
import logo from './images.png';
export default function Navbar(){
    return(
        <>
          <div className="nav_container">


              <span>
                 <img src={logo} className="vector_img" alt=""  />
                  <h3 className="title" >Meme Generator</h3>
              </span>
              <p>React Course Project-3</p>
          </div>

        </>
    )
}