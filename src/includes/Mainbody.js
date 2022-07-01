import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./main.css"
import Handy from "./pictures/Handy.png"
import Pipe from "./pictures/Rohr.png"
import Pipe2 from "./pictures/pipe.png"
import Pipe3 from "./pictures/pipeBlurr.png"






function Mainbody() {
    return (
<div className="mainbody">
<div className="midtoptext" >
        <div>
            <h6>THE PREMIUM BRAN IN RAILING SYSTEMS</h6>
            <h3>Sophisticated design, unbeatable quality, rapid <br/>
                assembly and excellent safety.</h3>
                <div id="mainpagelinks">
            <a className="klammerlink" href="#">LEARN MORE</a> <a className="klammerlink" href="#">VIEW PROJECTS</a></div>
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
  