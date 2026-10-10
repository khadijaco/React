import fott from '../assets/fott.jpg';
import fot from '../assets/fot.jpg';
import foot from '../assets/foot.jpg';
// import { IconHomeShield } from "react-icons/tb";
// import { IconHeater } from "react-icons/tb";
import { FaCheck, FaLightbulb, FaPiggyBank, FaThermometerHalf, FaShieldAlt, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";


const homeStyle = {

position: 'relative',
width: '100%',

};
const imageStyle = {
  
  width: '100%',
  display: 'block',

}
const overlayStyle = {
   position: 'absolute',
  top: "50%",
  left: "50%",
  transform: 'translate(-50%, -50%)', 
  color: "white",
  fontsize: "3rem",
  textalign: "center",
}
const cardStyle = {
  textAlign: 'center',
   padding: '50px',
   marginTop: '60px',
   fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}
const cardContainerStyle = {
   display: 'flex',
    justifyContent: 'center',
     gap: '30px',
     marginTop: '50px'

}

const cardStyle2 = {

backgroundColor: '#f0f8ff',
 padding: '40px',
  borderRadius: '20px',
   width: '300px'

}
const cardStyle3 = {
color: 'white',
backgroundColor: '#121212',
  flexWrap: 'wrap',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '50px',
  padding: '80px 20px', 

}
const buttonStyle4 = {
   backgroundColor: 'transparent',
  color: 'white',
  border: '2px solid white',
  padding: '15px 30px',
  borderRadius: '50px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'border-color 0.3s',
}
const buttonStyle3 = {
   

  border: '2px solid white',
  padding: '15px 30px',
  borderRadius: '50px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'border-color 0.3s',
}

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
const Us = {
  fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '18px',}
const buttonStyle2 = {
  backgroundColor: 'white', 
 borderRadius: '20px', 
 padding: '40px 60px', 
 boxShadow: '0px 4px 10px rgba(0,0,0,0.05)', 
 transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer'
}
const cardStyle5 = {   display: 'flex', 
 justifyContent: 'center', 
 alignItems: 'center', 
 gap: '30px', 
 flexWrap: 'wrap'}
 const cardStyle6={
    textAlign: 'center', 
   padding: '80px 20px', 
   backgroundColor: '#f5f9f9', 
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

const footerStyle4= {
      display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          borderBottom: '1px solid #444', 
          paddingBottom: '30px'
}



function Home() {
  return (
<div>
  <div style={homeStyle}>  
  <img src={fott} alt="fott" style={imageStyle} />
  
 
 </div>
 <div style={overlayStyle}> 
 <h1>Our Services</h1>
  <p>
    Images from 
    <a href="">Freepik</a>
  </p>
 </div>






<div style={cardStyle}>
 <h1>Services We Provide</h1>
 <p>unc eu turpis id nulla sodales
   luctus. Vestibulum fermentum dui faucibus ligula dapibus scelerisque. Etiam laoreet vitae est vitae convallis.

</p>
       
        <div style={cardContainerStyle}>
          
       
          <div style={{
              ...cardStyle2
              }}>
          <FaLightbulb size={80} color="#5ba3b5" style={{ marginBottom: '20px' }} />

            <h3>Mission</h3>
          </div>

         
             <div style={{
               ...cardStyle2
             }}>
          <FaPiggyBank size={80} color="#5ba3b5" style={{ marginBottom: '20px' }} />

            <h3>Energy Saving</h3>
          </div>


          

        </div>

 
        <div style={{
            ...cardContainerStyle
          }}>
          
       
          <div style={{
             ...cardStyle2
           }}>
          <FaThermometerHalf size={80} color="#5ba3b5" style={{ marginBottom: '20px' }} />

            <h3>Smart Heating</h3>
          </div>

      
             <div style={{
               ...cardStyle2
             }}>
          <FaShieldAlt size={80} color="#5ba3b5" style={{ marginBottom: '20px' }} />

            <h3>Security Protection</h3>
          </div>


          

        </div>


</div>



<div style={cardStyle3}>
<div>
<h1>Smart Camera Control</h1>
<ul
 style={{ listStyleType: 'none', padding: 0, margin: '20px 0 40px 0' }}
 >
  <li >
    <FaCheck color="#eae7e7" />
    100% Wire-Free – Free of power cords</li>
  <li>  <FaCheck color="#eae7e7" /> HD Video – Enjoy sharp, detailed video</li>
  <li><FaCheck color="#eae7e7" />Rechargeable – Long lasting batteries</li>
  <li><FaCheck color="#eae7e7" />Quick Charging – Get fast battery charging</li>
  <li><FaCheck color="#eae7e7" />2-way Audio – Listen in or talk back.</li>
</ul>
<button style={buttonStyle4}>Learn More</button>
</div>
<img src={fot} alt="fot" style={{ width: '500px', borderRadius: '20px' }} />

</div>





<div style={cardStyle4}>

<img src={foot} alt="foot" style={{ width: '500px', borderRadius: '20px' }} />






<div style={{backgroundColor: '#e7f0f0', padding: '100px', borderRadius: '10px'}}>
<h1>Smart Camera Control</h1>
<ul
 style={{ listStyleType: 'none', padding: 0, margin: '20px 0 40px 0'}}
 >
  <li >
    <FaCheck color="#eae7e7" />
    100% Wire-Free – Free of power cords</li>
  <li>  <FaCheck color="#eae7e7" /> HD Video – Enjoy sharp, detailed video</li>
  <li><FaCheck color="#eae7e7" />Rechargeable – Long lasting batteries</li>
  <li><FaCheck color="#eae7e7" />Quick Charging – Get fast battery charging</li>
  <li><FaCheck color="#eae7e7" />2-way Audio – Listen in or talk back.</li>
</ul>
<button style={buttonStyle4}>Learn More</button>
</div>
</div>

<div style={{ padding: '100px', borderRadius: '10px', marginTop: '50px'}}>
  <h1 style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '24px' , fontWeight: 'bold', textAlign: 'center'}}>People Trust Us</h1>
  <p style={Us}>Sample text. Click to select the Text Element.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <button style={buttonStyle3}>Learn More</button>
</div>








     
      <div style={cardStyle6}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '50px' }}>Know more about Smart Home</h1>

        <div style={cardStyle5}>
          
    
          <div style={buttonStyle2} >
            <h2 style={{ color: '#5ba3b5', fontSize: '48px', margin: '0' }}>20k</h2>
            <p style={{ fontSize: '18px', margin: '10px 0 0 0' }}>Tasks</p>
          </div>

          
          <div style={ buttonStyle2}>
            <h2 style={{ color: '#5ba3b5', fontSize: '48px', margin: '0' }}>7k</h2>
            <p style={{ fontSize: '18px', margin: '10px 0 0 0' }}>Happy Clients</p>
          </div>

            <div style={ buttonStyle2} >
            <h2 style={{ color: '#5ba3b5', fontSize: '48px', margin: '0' }}>156</h2>
            <p style={{ fontSize: '18px', margin: '10px 0 0 0' }}>Cups of Coffee</p>
          </div>

            <div  style={ buttonStyle2}>
            <h2 style={{ color: '#5ba3b5', fontSize: '48px', margin: '0' }}>65</h2>
            <p style={{ fontSize: '18px', margin: '10px 0 0 0' }}>Happy Clients</p>
          </div>
          
        </div>
    </div>

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

    <button style={buttonStyle3
       }>Talk to an Expert</button>
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
export default Home;