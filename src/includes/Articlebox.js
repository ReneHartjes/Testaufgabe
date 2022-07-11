import {Browserrouter, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./responsive.css"
import "./main.css"

import img1 from "./pictures/artimg1.png"
import img2 from "./pictures/artimg2.png"
import img3 from "./pictures/artimg3.png"





function Articlebox() {

    const [Railing, setRailing] = useState("Glass railings");
    const [Railing2, setRailing2] = useState("Baluster railings");
    const [Railing3, setRailing3] = useState("Wall railings");

    useEffect(() => {
        if(document.cookie.match(/lang=German/g)){
        setRailing("Glass Geländer")
        setRailing2("Balustraden Geländer")
        setRailing3("Wand Geländer")
        }
      }, []);
    


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
                <a>{Railing}</a><span><button>></button></span>
            </div>
        </div>
        <div className="articlewrap">
            <div className="imagecenter">
            <img src={img2}>
            </img>
            </div>
            <div>
                <a>{Railing2}</a><span><button>></button></span>
            </div>
        </div>
        <div className="articlewrap">
            <div className="imagecenter">
            <img src={img3}>
            </img>
            </div>
            <div>
                <a>{Railing3}</a><span><button>></button></span>
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
  