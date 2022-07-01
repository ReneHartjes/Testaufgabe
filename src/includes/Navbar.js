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
    let products = ["PRODUCTS", "PRODUKTE"]
    const [Sytems, setSystems] = useState("SYSTEMS");
    const [Projects, setProjects] = useState("PROJECTS");
    const [Service, setService] = useState("SERVICE");
    const [Contact, setContact] = useState("CONTACT");

    const [count, setcount] = useState(0);
    const counter = 0
    if(document.cookie.match(/German/gm) ){
        const counter = 1;
        console.log(counter)
    }


   document.cookie = "Lang=Eng";
  

    return (
        <div className='Navwrap'>
<div className="mainnav">
    <div>
    <ul>
        <li><img src={Logo} /></li>
       <li><a href="#">{products[counter]}</a></li>
       <li><a href="#">{Sytems}</a></li>
       <li><a href="#">{Projects}</a></li>
       <li><a href="#">{Service}</a></li>
       <li><a href="#">{Contact}</a></li>
       
     </ul>   
    <ul>

    </ul>
    <ul id="Usernav">
        <li><img src={Hphone} width="32" height="32"/><a id="custsupport" href="#">Customer support</a><span></span><p>|</p></li>
        <li><a  href="#"><img src={Scart} width="32" height="32"/></a><span id="scartnbr"><p>{Nbr}</p></span></li>
       <li id="login"><a  href="#"><img src={Login} width="32" height="32"/></a><div id="loginmenu"><label>login</label><input type="text" /><br></br><label>Pw</label><input type="password" /></div></li>
       <li><a href="#"><img src={Lupe} width="32" height="32"/></a></li>
    </ul>
    
    </div>
      
   </div>
   </div>
    );
  }
  
  export default Navbar;
  