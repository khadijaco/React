import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Leaderboard({ isDark, buttonColor }) {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  // اقرأ النتائج من LocalStorage
  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores") || "[]");
    // رتب النتائج
    savedScores.sort((a, b) => b.score - a.score);
    setScores(savedScores);
  }, []);

  // حساب المجموع الكلي
  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);

  // حذف كل النتائج
  const clearScores = () => {
    localStorage.removeItem("scores");
    setScores([]);
  };

  return (
    <div className="container mt-5">
      <h1 style={{ color: buttonColor, textAlign: "center" }}>
        🏆 Leaderboard
      </h1>

      <div className="row mt-4">

        <div className="col-md-4">
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: isDark ? "rgba(13, 27, 42, 0.9)" : "rgba(255, 255, 255, 0.9)",
              border: `2px solid ${buttonColor}`,
              color: isDark ? "white" : "#000",
            }}
          >
            <h5 style={{ color: buttonColor }}>Overall Score</h5>
            <h1 style={{ color: buttonColor, fontSize: "60px", fontWeight: "bold" }}>
              {totalScore}
            </h1>
            <p className="small" style={{ color: isDark ? "gray" : "#555" }}>
              Aggregate score from all sessions.
            </p>
          </div>
        </div>



        <div className="col-md-8">
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: isDark ? "rgba(13, 27, 42, 0.9)" : "rgba(255, 255, 255, 0.9)",
              border: `2px solid ${buttonColor}`,
              color: isDark ? "white" : "#000",
            }}
          >
            <h5 style={{ color: buttonColor }}>Recent Sessions</h5>

            {scores.length === 0 ? (
              <p style={{ color: isDark ? "gray" : "#555" }}>
                لا توجد نتائج بعد. العب أولاً! 🎮
              </p>
            ) : (
              <div className="mt-3">
                {scores.slice(0, 5).map((s, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center p-2 mb-2 rounded"
                    style={{
                      backgroundColor: isDark ? "#0d1b2a" : "#f0f0f0",
                      border: `1px solid ${buttonColor}`,
                    }}
                  >
                    <span>
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}{" "}
                      <strong>Player: {s.name}</strong>
                    </span>
                    <span style={{ color: buttonColor, fontWeight: "bold" }}>
                      Score: {s.score}
                    </span>
                    <span className="small" style={{ color: "gray" }}>
                      {s.date}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="btn me-2"
          style={{ backgroundColor: buttonColor, color: "white" }}
          onClick={() => navigate("/play")}
        >
          🎮 العب مرة أخرى
        </button>

        <button className="btn btn-danger" onClick={clearScores}>
          🗑️ حذف النتائج
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;