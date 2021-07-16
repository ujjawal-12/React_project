import Card from "./Card";
import Copyright from "./Copyright";
import image1 from "../images/marketing.jpg"
import image2 from "../images/s1.jpg"
import image3 from "../images/s2.jpg"
import image4 from "../images/digital.jpeg"
import image5 from "../images/software.jpeg"
import image6 from "../images/android.jpeg"

const Service=()=>{
  return (
    <div id="service-header">
      <h1 id="info">Our Services</h1>
    <div id="service">
      <Card img={image1} header="Marketing"/>
      <Card img={image2} header="App Development"/>
      <Card img={image3} header="Software Development"/>
      <Card img={image4} header="Digital Marketing"/>
      <Card img={image5} header="Web Development"/>
      <Card img={image6} header="Android Development"/>
      </div>
     <Copyright />
    </div>
  );
}

export default Service;