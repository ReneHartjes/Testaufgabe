import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./main.css"
import Logo from "./pictures/Qlogodark.png"
import Hphone from "./pictures/headphones.png"
import Scart from "./pictures/shoppingKart.png"
import Login from "./pictures/person.png"
import Lupe from "./pictures/search.png"





function Navbar() {
    const [Nbr, setNbr] = useState(2);

    return (
        <div className='Navwrap'>
<div className="mainnav">
    <div>
    <ul>
        <li><img src={Logo} /></li>
       <li><a href="#">PRODUCTS</a></li>
       <li><a href="#">SYSTEMS</a></li>
       <li><a href="#">PROJECTS</a></li>
       <li><a href="#">SERVICE</a></li>
       <li><a href="#">CONTACT</a></li>
       
     </ul>   
    <ul>

    </ul>
    <ul id="Usernav">
        <li><img src={Hphone} width="32" height="32"/><a id="custsupport" href="#">Customer support</a><span></span><p>|</p></li>
        <li><a href="#"><img src={Scart} width="32" height="32"/></a><span id="scartnbr"><p>{Nbr}</p></span></li>
       <li><a href="#"><img src={Login} width="32" height="32"/></a></li>
       <li><a href="#"><img src={Lupe} width="32" height="32"/></a></li>
    </ul>
    
    </div>
      
   </div>
   </div>
    );
  }
  
  export default Navbar;
  