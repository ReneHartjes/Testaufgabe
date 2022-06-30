import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./main.css"
import footqr from "./pictures/QrailingFoot.png"




function Footer() {
    return (

        <>

        <div id="footerlogoarea">
            <div>
            <img src={footqr} width="140"></img>
            </div>
        </div>
<div className="mainfooter">
    <div className='Footerwrap'>
        <div className='footer1spalte'>
            <h4>COMPANY</h4>

            <ul>
                <li><a>About us</a></li>
                <li><a>Careers</a></li>
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




<div class="footerbtnline">
<div class="footerbtnwrapper2">
<div>
    <ul>
        <li><div class="iconhold fb"></div></li>
        <li><div class="iconhold yt"></div></li>
        <li><div class="iconhold ig"></div></li>
        <li><div class="iconhold in"></div></li>
   
      </ul>
</div>
    <div>

    <select name="Langs" id="Langs">
  <option value="German">German</option>
  <option value="English">English</option>

</select>
<select name="Country" id="Country">
  <option value="Germany">Germany</option>
  <option value="GB">Great Britan</option>
  <option value="AUS">Australia</option>
  <option value="USA">USA</option>
</select>


    </div>


</div>
</div>







<div class="footerbtnline">
  <div class="footerbtnwrapper">
    <div>
      <h5>© 2006 - 2021 Q-railing GmbH & Co. KG
</h5>
    </div>
    <div>
      <ul>
        <li><a>Privacy policy</a></li>
        <li><a>Cookies</a></li>
        <li><a>Legal notice</a></li>
        <li><a>General Terms and Conditions of Business and Delivery</a></li>
   
      </ul>
      </div>
  </div>
</div>








</>
      
   
    );
  }
  
  export default Footer;
  