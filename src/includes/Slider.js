import {Browserrouter, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./main.css"


import Slideimg1 from "./pictures/Slide1.png"
import Slideimg2 from "./pictures/Slide2.png"
import Slideimg3 from "./pictures/Slide3.png"
import Slideimg4 from "./pictures/Slide4.png"


function Slider() {

  const [count, setCount] = useState(0);


  const imgses2 = [
    Slideimg1,Slideimg2,Slideimg3,Slideimg4

  ]

  const next = () =>{if(count >= 3){setCount(0)}else{setCount(count+1)}
 
  document.getElementById("imgg").classList.add("active")
  if(document.getElementById("imgg").classList.contains("active") == true && count == 2){
    document.getElementById("imgg").classList.remove("active")
  }
 



}
  const prev = () =>{if(count < 0){setCount(3)}else{setCount(count-1)}}

    return (
<div className="mainslider">
    
<div id="sliderrr">
<div className="imagesslideshow">
  <div className ="imageSlides ">
      <img id="imgg" src={imgses2[count]}/>
  </div>

  <a className="sliderbtn previous" id="frontbtn" onClick={prev}>❮</a>
  <a className="sliderbtn next" onClick={next} id="nextbtn">❯</a>
  <p id="couterr">{count+1}<span>/4</span></p>

</div>
</div>



    <div id="respimg">
     <img src={imgses2[0]}></img>
    </div>


</div>
      
   
    );
  }
  
  export default Slider;
  