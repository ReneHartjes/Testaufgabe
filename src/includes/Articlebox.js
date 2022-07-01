import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./main.css"

import img1 from "./pictures/artimg1.png"
import img2 from "./pictures/artimg2.png"
import img3 from "./pictures/artimg3.png"





function Articlebox() {


    


    return (
<div className="mainarticlebox">
    <div  className="colorfill">
        <div className="articletop">
        </div>
        <div className="articlebot">
        </div>
    </div>
    <div id="articleboxtext">
        <div className="articlewrap">
            <div className="imagecenter">
            <img src={img1}>
            </img>
            </div>
            <div>
                <a>Glass railings</a><span><button>></button></span>
            </div>
        </div>
        <div className="articlewrap">
            <div className="imagecenter">
            <img src={img2}>
            </img>
            </div>
            <div>
                <a>Baluster railings</a><span><button>></button></span>
            </div>
        </div>
        <div className="articlewrap">
            <div className="imagecenter">
            <img src={img3}>
            </img>
            </div>
            <div>
                <a>Wall railings</a><span><button>></button></span>
            </div>
        </div>
    </div>
    <div className="colorfill">
        <div className="articletop">
        </div>
        <div className="articlebot">
        </div>
    </div>
</div>
      
   
    );
  }
  
  export default Articlebox;
  