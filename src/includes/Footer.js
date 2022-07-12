import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./main.css"
import "./responsive.css"
import footqr from "./pictures/QrailingFoot.png"
import langicon from "./pictures/Qrailingsvgs/language_icon.svg"
import conticon from "./pictures/Qrailingsvgs/location_icon.svg"




function Footer() {

    const [ph, setPh] = useState("..english");

    var delete_cookie = function(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    function Ceval(){

       let langstate =  document.cookie

      
        console.log(langstate)
        console.log( document.getElementById("Langs").value)
        document.cookie = "lang="+document.getElementById("Langs").value;
        console.log(document.cookie)

        if(document.cookie.match(/German/g) && document.getElementById("Langs").value == "English"){
            setPh("German")
            delete_cookie('lang');
        }


        
        window.location.reload();
    }

    return (

        <>

        <div id="footerlogoarea">
            <div>
            <img src={footqr} width="140"></img>
            </div>
        </div>
<div className="mainfooter">
    <div className='footerwrap'>
        <div className='footer1spalte'>
            <h4>COMPANY</h4>

            <ul>
                <li><a>About us</a></li>
                <li id="careers"><a>Careers<span>WE'RE HIRING</span></a></li>
                <li><a>Contact us</a></li>
                <li><a>Become a customer</a></li>
            </ul>


        </div>
        <div className='footer1spalte'>
            <h4>INFORMATION</h4>

            <ul>
                <li><a>News</a></li>
                <li><a>Downloads</a></li>
                <li><a>Video</a></li>
                <li><a>Events</a></li>
                <li><a>Trainings</a></li>
            </ul>


        </div>
        <div className='footer1spalte'>
            <h4>CUSTOMER SUPPORT</h4>

            <ul>
                <li><a>Support</a></li>
                <li><a>Order</a></li>
                <li><a>Payments</a></li>
                <li><a>Shipping</a></li>
                <li><a>Return</a></li>
            </ul>


        </div>
        <div className='footer2spalte'>
            <h4>OFFICES</h4>

            <ul>
                <ul>
                <li>Marie-Curie-Strasse 8-14</li>
                <li>46446 <b>Emmerich am Rhein</b></li>
                <li><a><br/> </a></li>
                <li><b>Phone:</b> 02822 915 69 0</li>
                <li><b>Fax:</b> 02822 915 69 70</li>
                <li><a><b>E-mail:</b> sales.de@q-railing.com</a></li>
            </ul>
            <ul>
                <li>Hanns-Schwindt-Strasse 8</li>
                <li>81829 <b>München</b></li>
                <li><a><br/> </a></li>
                <li><b>Phone:</b> 089 24 887 460</li>
                <li><b>Fax:</b> 089 24 887 469 9</li>
                <li><a>E-mail: sales.de@q-railing.com</a></li>
            </ul>
            
            </ul>


        </div>
    

</div>
</div>




<div className="footerbtnline">
<div className="footerbtnwrapper2">
<div>
    <ul>
        <li><div className="iconhold fb"></div></li>
        <li><div className="iconhold yt"></div></li>
        <li><div className="iconhold ig"></div></li>
        <li><div className="iconhold in"></div></li>
   
      </ul>
</div>
    <div id="langselec">

    <select name="langs" id="langs"  onChange={Ceval}>
 
    <option value="" selected="selected">Select lang</option>
    <option value="English" >English</option>
  <option value="German">German</option>
</select><img id="langicon" src={langicon} height="16" width="16"></img>
<select name="country" id="country">
  <option value="Germany">Germany</option>
  <option value="GB">Great Britan</option>
  <option value="AUS">Australia</option>
  <option value="USA">USA</option>
</select><img id="conticon" src={conticon} height="16" width="16"></img>


    </div>


</div>
</div>







<div className="footerbtnline">
  <div className="footerbtnwrapper">
    <div>
      <h5>© 2006 - 2021 Q-railing GmbH & Co. KG
</h5>
    </div>
    <div>
      <ul>
        <li><a>Privacy policy</a></li>
        <li><a>Cookies</a></li>
        <li id="legalnotice"><a>Legal notice</a></li>
        <li><a>General Terms and Conditions of Business and Delivery</a></li>
   
      </ul>
      </div>
  </div>
</div>








</>
      
   
    );
  }
  
  export default Footer;
  