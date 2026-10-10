



import { useEffect, useRef, useState } from "react";
import foot from "./assets/foot.jpg";
function Task2() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (

    <div>
    <div className="container" ref={sectionRef}>
      <div className="content">
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', margin: '0' }}>our contact
          <span className="dot">.</span>
        </h1>
        <p className="contact-text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="contact-right">
        <div className="shape-wrapper">
          <div className={`shape-white ${isVisible ? "show" : ""}`}></div>
          <div className={`shape-blue ${isVisible ? "show" : ""}`}></div>
        </div>
      </div>
</div>


<div className="training">
  <h2 className="training-title">Training & Development Programs</h2>
  <p className="training-text">
    Sample text. Click to select the text box. Click again or double click to
    start editing the text.
  </p>

  <div className="training-content">
    <div className="training-cards">
      <label htmlFor="training-input">Training Input:</label>
      <input type="text" id="training-input" />

      <label htmlFor="training-email">Email:</label>
      <input type="email" id="training-email" />

      <label htmlFor="training-message">Message:</label>
      <textarea name="" id=""></textarea>

      <button className="btn">Submit</button>
    </div>

    <div className="training1">
      <div className="corporate-right">
        <img src={foot} alt="fot" />
      </div>
      <div className="training1-text">
        Vulputate dignissim suspendisse in est ante in nibh mauris. Neque
        aliquam vestibulum morbi blandit cursus risus. Nisi est sit amet
        facilisis. Volutpat commodo sed egestas egestas. Id leo in vitae
        turpis massa sed elementum tempus. Non curabitur gravida arcu ac
        tortor dignissim convallis aenean. Amet purus gravida quis blandit
        turpis.
        Image from <a href="#">Freepik</a>
      </div>
    </div>
  </div>
</div>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193593.7!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manhattan Location"
      ></iframe>
    </div>

    <div className="contact-info">
      <div className="contact-phones">
        <h2>(480) 565-7878</h2>
        <h2>(481) 656 85 85</h2>
      </div>

      <p className="contact-address">
        4140 PARKER RD. ALLENTOWN, NEW MEXICO 56674
      </p>

      <div className="contact-hours">
        <p><strong>Tuesday – Friday:</strong> 8am – 7pm</p>
        <p><strong>Saturday – Sunday:</strong> 8am – 10pm</p>
        <p><strong>Closed Monday</strong></p>
      </div>
       </div>
     < div className="contact-fot">
     <h3>Sample text. Click to select the Text Element.</h3>
     </div>
   



    </div>
  );
}
export default Task2;