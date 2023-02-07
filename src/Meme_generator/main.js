import React from "react";

import './data';
import memes_data from "./data";

export default function Main()
{ 
    
    const [meme,setMeme]=React.useState({rand_img:"/images/One Does Not Simply.png",top_text:"",bottom_text:""})    // set state for img,top_text,btm_text  ///
   
    const [all_images,setImages]=React.useState(memes_data)                                                        // set meme-data to  all images  ///
        
        
        
        
    
    /////   RANDOM NO FUNCTION /////
    
    function getRandomImage() 
    {
    
    
        const rand_num = Math.floor(Math.random()*all_images.length);                  // get the random no ///
        const current_img=all_images[rand_num].url                                      // eg....current_img = all_images[3].img  ///
        setMeme(prevArr=>({...prevArr,rand_img:current_img}) )                          // spread other array elem &  set the current_img to rand_img property   ///
         
   }


   ///  INPUT CHANGE FUNCTION  ///


   function handleChange(event)
   {
    const {name,value}=event.target
    setMeme(prevMeme=>{return{...prevMeme,[name]:value}})                             //  ...prevMeme, eg  top_text:{meme.top_text}   ///
   }

   ///console.log(meme)
    return(
    <>
        <div className="main-section" >
            <div className="input_container">
                <input  type='text' 
                        name="top_text"
                        value={meme.top_text}                          /// controlled component  //
                        placeHolder ="Top Text" 
                        onChange={handleChange}                        ///  onChange ////
                        className="input" 
                />
                <input type='text'                 
                        name="bottom_text"
                        value={meme.bottom_text}
                        placeHolder ="Bottom Text" 
                        onChange={handleChange}                        /// onChange  //
                        className="input" 
                  />      
            </div>
            <div className="btn_container">
                 <button type="button" className="btn" onClick={getRandomImage} >Get A New Meme Image</button>
             </div> 
             <div className="img_container">
                <img  src={meme.rand_img}   className="meme_img"   alt=""  />
                <div className="top">{meme.top_text}</div>
                <div className="btm">{meme.bottom_text}</div>
             </div>
        </div>

     </>
    )
}