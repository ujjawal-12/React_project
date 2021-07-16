import Errorimage from "../images/error.svg";
const Error=()=>{
  return (
    <div className="errimg">
      <img src={Errorimage} alt="errimage"/>
      <h1>Page not found</h1>
    </div>
  )
}

export default Error;