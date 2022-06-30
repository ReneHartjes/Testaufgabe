import {Browserrouter, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./main.css"


import Slideimg1 from "./pictures/Slide1.png"
import Slideimg2 from "./pictures/Slide2.png"
import Slideimg3 from "./pictures/Slide3.png"
import Slideimg4 from "./pictures/Slide4.png"


function Slider() {

  const [count, setCount] = useState(0);
  const imgses = [

    "https://www.w3schools.com/w3images/workbench.jpg",
    "https://www.w3schools.com/w3images/sound.jpg",
    "https://www.w3schools.com/w3images/workbench.jpg",
    "https://www.w3schools.com/w3images/sound.jpg"


  ]

  const imgses2 = [
    Slideimg1,Slideimg2,Slideimg3,Slideimg4

  ]

  const next = () =>{if(count >= 3){setCount(0)}else{setCount(count+1)}}
  const prev = () =>{if(count < 0){setCount(3)}else{setCount(count-1)}}

    return (
<div className="mainslider">
    
<div id="sliderrr">
<div className="images-slideshow">
  <div className ="imageSlides ">
      <img src={imgses2[count]}/>
  </div>

  <a className="slider-btn previous" id="frontbtn" onClick={prev}>❮</a>
  <a className="slider-btn next" onClick={next} id="nextbtn">❯</a>
  <p id="couterr">{count+1}/4</p>

</div>
</div>






</div>
      
   
    );
  }
  
  export default Slider;
  