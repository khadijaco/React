import fott from '../assets/fott.jpg';
import fot from '../assets/fot.jpg';
import foot from '../assets/foot.jpg';
// import { IconHomeShield } from "react-icons/tb";
// import { IconHeater } from "react-icons/tb";
import { FaCheck, FaLightbulb, FaPiggyBank, FaThermometerHalf, FaShieldAlt, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
const cardStyle4 = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap', 
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  padding: '80px 20px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'


}

const cardStyl75 = {
   backgroundColor: '#f2f2f2', 

   borderRadius: '30px', 
   padding: '100px',
}
const footerStyle = {
     backgroundColor: '#121212',
        color: 'white',
        padding: '60px 40px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
}

const footerStyle4 = {
      display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          borderBottom: '1px solid #444', 
          paddingBottom: '30px'
}

function Content() {
  return (


<div>


 <div style={cardStyle4}>
      <div style={{ flex: '1 1 500px' }}> 
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Make Smart Home Project</h1>
       <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>Sample text. Click to select the Text Element.</p>
        <div style={cardStyl75}>
          <label htmlFor="project-name">Name:</label>
          <input type="text" id="project-name" name="project-name" style={{ padding: '10px', marginBottom: '20px', width: '100%' }} />
          <label htmlFor="project-name">Email:</label>
          <input type="Email" id="project-name" name="project-name" style={{ padding: '10px', marginBottom: '20px', width: '100%' }} />
          <label htmlFor="project-name">Message:</label>
          <textarea id="project-name" name="project-name" style={{ padding: '10px', marginBottom: '20px', width: '100%' }} />
          <button style={{ padding: '10px 20px', backgroundColor: '#5ba3b5', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
       </div>   

    </div>
<img src={foot} alt="" style={{borderRadius:'50px'}} />
</div>










     <footer style={footerStyle}>
   
     <div style={footerStyle4}>
       <div>
           <h2 style={{ margin: '0', fontSize: '28px' }}>Ready to get started?</h2>
            <p style={{ margin: '10px 0 0 0', color: '#aaa', fontSize: '16px' }}>Let's talk about creating your competitive advantage.</p> </div>
   
       <button style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: '2px solid white',
          padding: '15px 30px',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          transition: 'border-color 0.3s'
       }}>Talk to an Expert</button>
     </div>
   
   
   
      <div style={{
             display: 'flex',
             justifyContent: 'space-between',
             flexWrap: 'wrap',
             gap: '40px'
           }}>
   
     
      <div style={{ maxWidth: '300px' }}>
                 <h2>🏠 SMART HOME</h2>
               <p style={{ color: '#aaa' }}>We offer fully customizable solutions that cater to individual needs.</p>
               <p style={{ color: '#aaa' }}>📍 7507 Dewey Route, East Darylville, ME 36932, United States</p>
               <a href="#" style={{ color: '#5ba3b5', textDecoration: 'none' }}>Show on map</a>
   
         <div style={{ 
                 display: 'flex', 
                 gap: '15px', 
                 marginTop: '20px' 
               }}>
           <span><FaFacebook size={20} color="#ffffff" /></span>
           <span><FaInstagram size={20} color="#ffffff" /></span>
           <span><FaGithub size={20} color="#ffffff" /></span>
           <span><FaLinkedin size={20} color="#ffffff" /></span>
   
         </div>
       </div>
   
     
       <div style={{ maxWidth: '300px' }}>
             <h2>Need help?</h2>
               <h3><FaPhoneAlt size={20} color="#ffffff" /> +1-800-123-4567</h3>
               <p style={{ color: '#aaa' }}>
                 Monday – Friday: 9:00-20:00
                 <hr style={{ borderColor: '#444', margin: '10px 0' }} />
                 Saturday: 11:00 – 15:00
               </p>
               <br />
               <p style={{ color: '#aaa' }}>✉ smarthome@support.com</p>
             </div>
   
      
     <div style={{ maxWidth: '300px' }}>
         <h2>Quick Links</h2>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>About Company</a>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Our Services</a>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Blog</a>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Testimonials</a>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Areas We Serve</a>
               <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>Brands</a>
             </div>
   
   
   
     </div>
   
   </footer>
   </div>
  );
}
export default Content;