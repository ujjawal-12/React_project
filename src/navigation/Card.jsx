const Card=(props)=>{
  return (
    <div id="card">
      <div id="image"><img src={props.img} alt="image" /></div>
      <div id="service-container">
        <h1>{props.header}</h1>
        <p> Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
        <button>Check Now</button>
      </div>
    </div>
  );
}
export default Card;