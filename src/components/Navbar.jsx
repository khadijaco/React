import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar
({
  isDark,
  setIsDark,
  buttonColor,
  setButtonColor,
  useImage,
  setUseImage,
}) {
  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4 py-2"
      style={{
        backgroundColor: isDark
          ? "rgba(13, 27, 42, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
        color: isDark ? "white" : "#000",
        borderBottom: `2px solid ${buttonColor}`,
        transition: "all 0.3s ease",
      }}
    >
           <div className="d-flex align-items-center gap-2">
        <div
          style={{
            backgroundColor: "#7b2cbf",
            color: "white",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          KH
        </div>
        <div>
          <h5 className="m-0" style={{ color: "#7b2cbf" }}>
        KHADIJA DABAS
          </h5>
          <small style={{ color: "gray", fontSize: "11px" }}>
            React Advanced Hooks · Games · Router · LocalStorage
          </small>
        </div>
      </div>

  
      <div className="d-flex gap-2 align-items-center">
        <Link to="/" className="btn btn-sm" style={{ color: isDark ? "white" : "#000", border: `1px solid ${buttonColor}` }}>
          Home
        </Link>
        <Link to="/play" className="btn btn-sm" style={{ color: isDark ? "white" : "#000", border: `1px solid ${buttonColor}` }}>
          Play
        </Link>
        <Link to="/leaderboard" className="btn btn-sm" style={{ color: isDark ? "white" : "#000", border: `1px solid ${buttonColor}` }}>
          Leaderboard
        </Link>
       

   
        <input
          type="color"
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
          style={{
            width: "40px",
            height: "30px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          title="تغيير اللون"
        />

       

        <button
          className="btn btn-sm"
          onClick={() => setIsDark(!isDark)}
          style={{
            backgroundColor: isDark ? "#ffd700" : "#333",
            color: isDark ? "#000" : "#fff",
            border: "none",
          }}
          title="تبديل الوضع"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;