import {Browserrouter, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./main.css"
import Handy from "./pictures/Handy.png"
import Pipe from "./pictures/Rohr.png"
import Pipe2 from "./pictures/pipe.png"
import Pipe3 from "./pictures/pipeBlurr.png"






function Mainbody() {

    const [Brand, setBrand] = useState("THE PREMIUM BRAND IN RAILING SYSTEMS");
    const [Brand2, setBrand2] = useState("Sophisticated design, unbeatable quality, rapid");
    const [Brand3, setBrand3] = useState("assembly and excellent safety.");
    const [Brand4, setBrand4] = useState("LEARN MORE");
    const [Brand5, setBrand5] = useState("VIEW PROJECTS");

    useEffect(() => {
        if(document.cookie.match(/lang=German/g)){
        setBrand("DIE PREMIUMMARKE FÜR GELÄNDERSYSTEME")
        setBrand2("Durchdachtes Design, unschlagbare Qualität")
        setBrand3(", schnelle Montage und hohe Sicherheit.")
        setBrand4("Erfahre mehr")
        setBrand5("Projekte ansehen")
        }
      }, []);









    return (
<div className="mainbody">
<div className="midtoptext" >
        <div>
            <h6>{Brand}</h6>
            <h3>{Brand2}<br/>
            {Brand3}</h3>
                <div id="mainpagelinks">
            <a className="klammerlink" href="#">{Brand4}</a> <a className="klammerlink" href="#">{Brand5}</a></div>
        </div>
</div>
<div className="midwrap">
<div id="bodymid">

    <div className="midtext">
        <div>
            <b><p>OUR BRAND NEW APP</p></b>
            <b><h3>Easy configuring and odering in a <br /> blink of an eye.</h3></b>
            <a href="#" id="dlllink"> DOWNLOAD HERE</a>
        </div>
    </div>

    <div className="midimg">
        <img src={Handy}/>
    </div>
</div>
</div>

<div className="mainnews">
    <div className="wrapperNews">
    <div id="signupmain">
        <h3>Sign up for our <br></br>monthly newsletter</h3>
    </div>  

    <div id="signupinfo">
        <div>
            <p>Subscribe to our newsletter to benefit from exclusive <br />
            offers, product updates and best practices.</p>
            <input type="text" name="mail" placeholder='    E-mailadress..' id="mail"/>
            <br />
            <input type="checkbox" name="mail2" id="mail2"/><label>Yes, I agree with the <a id="pp">privacy policy</a></label>
            <br />
            <button id="subBtn">Subscribe now</button>
            <img id="pipepic" src={Pipe}></img>


        </div>
    </div>
    <div id="pipepic23">
           
            <img id="pipepic3" src={Pipe3}></img>
            </div>
</div>
<img id="pipepic2" src={Pipe2}></img>
</div>
</div>
      
   
    );
  }
  
  export default Mainbody;
  