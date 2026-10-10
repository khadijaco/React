import hero from "./assets/Hero.png";

function Foto() { 
    return (  <div className="card-container">
          <div className="magis-card">
            <div className="front">
                <img src={hero} alt="Hero" />
            </div>
            <div className="back">
                <h2>Hero</h2>
                <p>This is the back of the card.</p>
            </div>

          </div>
        </div>);
  }
export default Foto;