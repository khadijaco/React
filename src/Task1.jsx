import fot1 from './assets/fot1.jpg';
import foot from './assets/foot.jpg';
import fott from './assets/fott.jpg';
import ffot from './assets/fFot.jpg';
import { FaFacebook, FaInstagram ,FaGithub,FaLinkedin} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Task1() {

  
  return (
    <div className="page-wrapper">



    <div className="smart-card">

      
        <div className="magic-card">
          
            <img src={foot} alt="Fot" />
         
        </div>
<div className="card-text-section">   
<h1 className="title">
    10 Must-Have Smart Home Devices
</h1>
          <div className="card-meta">
            <span>Aug 02, 2024</span>
            <span className="meta-divider">|</span>
            <span>Comments (0)</span>
          </div>

<p className="description">Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.</p>
 <button className="btn">Read More</button>
</div>



        
     
    </div>


<div className="smart-card">

      
        <div className="magic-card">
          
            <img src={fot1} alt="Fot1" />
         
        </div>
<div className="card-text-section">   
<h1 className="title">
Affordable Ways to Upgrade Your Living Space</h1>
          <div className="card-meta">
            <span>Aug 02, 2024</span>
            <span className="meta-divider">|</span>
            <span>Comments (0)</span>
          </div>

<p className="description">Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.</p>
 <button className="btn">Read More</button>
</div>
 </div>
 




<div className="smart-card">

      
        <div className="magic-card">
          
            <img src={fott} alt="Fot" />
         
        </div>
<div className="card-text-section">   
<h1 className="title">
Voice Control and Home Automation</h1>
          <div className="card-meta">
            <span>Aug 02, 2024</span>
            <span className="meta-divider">|</span>
            <span>Comments (0)</span>
          </div>

<p className="description">Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.</p>
 <button className="btn">Read More</button>
</div>



        
     
    </div>
        


     
  <div className="smart-card">

      
        <div className="magic-card">
          
            <img src={ffot} alt="Fot" />
         
        </div>
<div className="card-text-section">   
<h1 className="title">
Energy Efficiency and Smart Homes</h1>
          <div className="card-meta">
            <span>Aug 02, 2024</span>
            <span className="meta-divider">|</span>
            <span>Comments (0)</span>
          </div>

<p className="description">Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.</p>
 <button className="btn">Read More</button>
</div>



        
     
    </div>








<footer class="footer">

  <div class="footer-top">
    <div>
      <h2>Ready to get started?</h2>
      <p>Let's talk about creating your competitive advantage.</p>
    </div>

    <button>Talk to an Expert</button>
  </div>



  <div class="footer-content">

  
    <div class="footer-column">
      <h2>🏠 SMAR
      HOME</h2>

      <p>We offer fully customizable solutions that cater to individual needs.</p>

      <p>📍 7507 Dewey Route, East Darylville,
        ME 36932, United States</p>

      <a href="#">Show on map</a>

      <div class="social">
        <span><FaFacebook size={20} color="#ffffff" /></span>
        <span><FaInstagram size={20} color="#ffffff" /></span>
        <span><FaGithub size={20} color="#ffffff" /></span>
        <span><FaLinkedin size={20} color="#ffffff" /></span>

      </div>
    </div>

  
    <div class="footer-column contact">
      <h2>Need help?</h2>

      <h3><FaPhoneAlt size={20} color="#ffffff" />
         +1-800-123-4567</h3>

      <p>
        Monday – Friday: 9:00-20:00
  <hr />
        Saturday: 11:00 – 15:00
      </p>

      <br />



      <p class="contact-email">✉ smarthome@support.com</p>
    </div>

   
    <div class="footer-column links">
      <h2>Quick Links</h2>

      <a href="#">About Company</a>
      <br />
      <a href="#">Our Services</a>
      <br />
      <a href="#">Blog</a>
        <br />
      <a href="#">Testimonials</a>
       <br />
      <a href="#">Areas We Serve</a>
         <br />
      <a href="#">Brands</a>
    </div>

  </div>

</footer>

    </div>






  );
}

export default Task1;
