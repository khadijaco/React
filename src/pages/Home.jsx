import { useState, useEffect } from "react";

function Home({
  isDark,
  setIsDark,
  buttonColor,
  setButtonColor,
  useImage,
  setUseImage,
}) {

  const [name, setName] = useState('Guest')

  const [difficulty, setDifficulty] = useState('normal')

  const [focusGoal, setFocusGoal] = useState(1)



  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("focusGoal", focusGoal);
  }, [name, difficulty, focusGoal]);

  return (
    <div
      className="container mt-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          border: `2px solid ${buttonColor}`,
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: isDark
            ? "rgba(13, 27, 42, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          color: isDark ? "white" : "#000",
          width: "400px",
          backdropFilter: "blur(10px)",
          marginRight: "20px",
        }}
      >
        <h5 style={{ color: buttonColor }}>Welcome</h5>
        <h3>Hello, {name}! 👋</h3>
        <p className="small" style={{ color: isDark ? "gray" : "#555" }}>
          Difficulty: {difficulty} · Focus Goal: {focusGoal} mins
        </p>
        <p className="small fst-italic" style={{ color: isDark ? "gray" : "#555" }}>
          Stay sharp. Keep practicing —  Unknown
        </p>

 <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-sm"
            style={{ backgroundColor: buttonColor, color: "white" }}
            onClick={() => setUseImage(true)}  
           
          >
           ←backgroundImg
          </button>

          <button
            className="btn btn-sm"
            style={{ backgroundColor: buttonColor, color: "white" }}
            onClick={() => setUseImage(false)}  
         
          >
               backgroundColor→
          </button>
        </div>
      </div>

      <div
        style={{
          border: `2px solid ${buttonColor}`,
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: isDark
            ? "rgba(13, 27, 42, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          color: isDark ? "white" : "#000",
          width: "500px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h5 style={{ color: buttonColor }}>Profile & Settings</h5>

        <div className="row g-3 mt-2">
      
          <div className="col-md-6">
            <label className="small">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: isDark ? "#0d1b2a" : "white",
                color: isDark ? "white" : "#000",
                border: `1px solid ${buttonColor}`,
              }}
            />
          </div>

      
          <div className="col-md-6">
            <label className="small">Difficulty</label>
            <select
              className="form-select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              style={{
                backgroundColor: isDark ? "#0d1b2a" : "white",
                color: isDark ? "white" : "#000",
                border: `1px solid ${buttonColor}`,
              }}
            >
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="col-12">
            <label className="small">Daily Focus Goal (mins)</label>
            <input
              type="number"
              className="form-control"
              value={focusGoal}
              onChange={(e) => setFocusGoal(Number(e.target.value))}
              style={{
                backgroundColor: isDark ? "#0d1b2a" : "white",
                color: isDark ? "white" : "#000",
                border: `1px solid ${buttonColor}`,
              }}
            />
          </div>

      
          <div className="col-12">
            <button
              className="btn btn-sm"
              style={{ backgroundColor: buttonColor, color: "white" }}
              onClick={() => alert("✅ تم الحفظ!")}
            >
              Save
            </button>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;