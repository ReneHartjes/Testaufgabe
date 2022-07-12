import {Browserrouter, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./main.css"
import "./responsive.css"
import Logo from "./pictures/Qlogodark.png"
import Hphone from "./pictures/headphones.png"
import Scart from "./pictures/shoppingKart.png"
import Login from "./pictures/person.png"
import Lupe from "./pictures/search.png"
import SearchBar from './Searchbar'
import data from "./Data.json"



function Navbar() {
    const [Nbr, setNbr] = useState(2);
    let products = ["PRODUCTS", "PRODUKTE"]
    const [Produkte, setProdukte] = useState("PRODUCTS", "PRODUKTE");
    const [Sytems, setSystems] = useState("SYSTEMS");
    const [Projects, setProjects] = useState("PROJECTS");
    const [Service, setService] = useState("SERVICE");
    const [Contact, setContact] = useState("CONTACT");
    const [Custs, setCusts] = useState("CUSTOMER SUPPORT");
    var counter = 0;
    
   
        useEffect(() => {
            if(document.cookie.match(/lang=German/g)){
            setProdukte("PRODUKTE")
            setSystems("SYSTEME")
            setProjects("PROJEKTE")
            setContact("KONTAKTE")
            setCusts("KUNDENSUPPORT")
            }
          }, []);
        

   

    function Responsivemenu(){
       let Resmenu = document.getElementById("responsivemenu")
       let Resbtn = document.getElementById("rspbtn")
        console.log("qqw")

        if(Resmenu.classList.contains("active") == true){
            Resmenu.classList.remove("active")
            Resbtn.classList.remove("activebtn")
        }else{
            Resmenu.classList.add("active")
            Resbtn.classList.add("activebtn")
        }

    }
  

    return (
        <div className='navwrap'>
<div className="mainnav">
    <div>
    <ul>
        <li  id="logo"><img src={Logo} /></li>
       <li><a id="produkte" href="#">{Produkte}</a></li>
       <li><a id="sytems"href="#">{Sytems}</a></li>
       <li><a id="projects"href="#">{Projects}</a></li>
       <li><a id="service" href="#">{Service}</a></li>
       <li><a id="contact" href="#">{Contact}</a></li>
       
     </ul>   
    <ul>
   
    </ul>
    <ul id="Usernav">
        <li id="custsupportli"><img src={Hphone} width="22" height="22"/><a id="custsupport" href="#">{Custs}</a><span><div id="custsupportadd"></div></span><p>|</p></li>
        <li><a  href="#"><img src={Scart} width="22" height="22"/></a><span id="scartnbr"><p>{Nbr}</p></span></li>
       <li id="login"><a  href="#"><img src={Login} width="22" height="22"/></a><div id="loginmenu"><label>login</label><input type="text" /><br></br><label>Pw</label><input type="password" /></div></li>
       <li id="search"><a href="#" ><img src={Lupe} width="22" height="22"/></a><span id="searchbarinclude"><SearchBar data={data} /></span></li>
    </ul>
    
    </div>
      
   </div>

    <div id="responsivebtn">
    <img  width= "50" height= "50"src={Logo} /><button id="rspbtn" onClick={Responsivemenu}></button>
        <br/>

    </div>

    
    <div id="responsivemenu" className ="active">
            <ul>       
                <li><a id="Produkte" href="#">{Produkte}</a></li>
                <li><a id="Sytems"href="#">{Sytems}</a></li>
                <li><a id="Projects"href="#">{Projects}</a></li>
                <li><a id="Service" href="#">{Service}</a></li>
                <li><a id="Contact" href="#">{Contact}</a></li>
       </ul>
        </div>

   </div>
    );



  }
  
  export default Navbar;
  