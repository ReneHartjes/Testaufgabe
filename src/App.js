
//import Commentary from "./Commentary";
//import CommentOP from "./components/CommentOP";
//import Frameforcode from "./components/Projectsides/Frameforcode";

import Navbar from "./includes/Navbar";
import Slider from "./includes/Slider";
import Mainbody from "./includes/Mainbody";
import Footer from "./includes/Footer";
import Articlebox from "./includes/Articlebox";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

     <Navbar />
     <Slider />
     <Articlebox />
     <Mainbody />
     <Footer />
      
    </div>
  );
}

export default App;

