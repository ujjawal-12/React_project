// import Homeimg from "../images/img2.svg"
import { NavLink } from "react-router-dom";
import Copyright from './Copyright';

const Common=(props)=>{
  return (
    <div>
    <section className="homesec">
     <div className="box-1">
      <div id="box">
       <h1>{props.header} <br /> <span>{props.name}</span></h1>
       <h3>{props.info}</h3>
       <button ><NavLink to="/service" exact className="btnlink">{props.btninfo}</NavLink></button>
    </div>
    </div>
     <div className="box-2">
       <img src={props.img} alt="image" />
     </div>
   </section>
   <Copyright></Copyright>
   </div>
  );
}

export default Common;