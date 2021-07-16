import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Copyright from './Copyright';
const Contact=()=>{
  const notify = () => toast.success("👍 Form submitted");
  const handleformdata=(e)=>{
    e.preventDefault();
   notify();
    console.log(e);
  }
  return (
    <section id="contact">
      <h1>Contact Us</h1>
      <div className="form">
        <form action="#" method="post" id="form1" onSubmit={handleformdata}>
          <label htmlFor="name">Fullname</label><br />
          <input type="text" id="name" placeholder="Enter your name.." value=""/><br />
          <label htmlFor="phone">Phone No</label><br />
          <input type="text" id="phone" placeholder="Mobile Number" value=""/><br />
          <label htmlFor="email">Email Address</label><br />
          <input type="email" placeholder="name@gmail.com" id="email" value=""/><br />
          <label htmlFor="mssge">Message</label><br />
          <textarea name="mssge" id="mssge" cols="30" rows="6"></textarea><br />
          <button type="submit" form="form1">Submit form</button><br />
        </form>
        <ToastContainer position="top-center" />
        </div>
       <Copyright />
       </section>
  );
}

export default Contact;