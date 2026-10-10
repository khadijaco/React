import { useState, useEffect } from "react";  


import { useNavigate } from "react-router-dom";

function Playy  ({ isDark, buttonColor }) {
    // اانقل على صفحة Leaderboard بعد انتهاء اللعبة
  const navigate = useNavigate();
// كلمه الي رح تظهر للاعب
  const [word, setWord] = useState("");
//   لون الكلمة
  const [wordColor, setWordColor] = useState("");
//   نقاط اللاعب
  const [score, setScore] = useState(0);
//   عدد الاخطاء الي عملها اللاعب
  const [mistakes, setMistakes] = useState(0);
//   حالة اللعبة هل انتهت ام لا
  const [gameOver, setGameOver] = useState(false);
//   الوقت المتبقي
  const [timeLeft, setTimeLeft] = useState(30);

  // ========== قائمة الألوان ==========
  const colorNames = ["Red", "Blue", "Green", "Yellow"];
  const colorValues = ["red", "blue", "green", "yellow"];

  // ==========  توليد سؤال ==========
  const generateQuestion = () => {
    const randomWordIndex = Math.floor(Math.random() * colorNames.length);
    const newWord = colorNames[randomWordIndex];

    let randomColorIndex = Math.floor(Math.random() * colorValues.length);
    // اذا كان لون الكلمة نفس الكلمة الي رح تظهر للاعب رح يعيد توليد لون جديد
    while (randomColorIndex === randomWordIndex) {
      randomColorIndex = Math.floor(Math.random() * colorValues.length);
    }

    setWord(newWord);
    setWordColor(colorValues[randomColorIndex]);
  };

  // ========== حفظ النتيجة  ==========
  const saveScore = () => {
    const savedScores = JSON.parse(localStorage.getItem("scores") || "[]");
    const newScore = {
      name: localStorage.getItem("name") || "Guest",
      score: score,
      difficulty: localStorage.getItem("difficulty") || "normal",
      date: new Date().toLocaleString("ar-EG"),
    };
    savedScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(savedScores));
  };

  // ========== المؤقت ==========
  useEffect(() => {
    if (gameOver) return;

    if (timeLeft <= 0) {
      setGameOver(true);
      saveScore();  
      setTimeout(() => navigate("/leaderboard"), 2000);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, navigate]);

  // ==========  عند الضغط ==========
  const handleAnswer = (selectedColor) => {
    if (gameOver) return;

    if (selectedColor === wordColor) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
      if (mistakes + 1 >= 5) {
        setGameOver(true);
        saveScore();  
        setTimeout(() => navigate("/leaderboard"), 2000);
        return;
      }
    }

    generateQuestion();
  };

  // ==========  بدء اللعبة ==========
  useEffect(() => {
    // ولد سؤال جديد عند بدء اللعبة
    generateQuestion();
  }, []);

  // ========== إعادة اللعبة ==========
  const resetGame = () => {
    setScore(0);
    setMistakes(0);
    setGameOver(false);
    setTimeLeft(30);
    generateQuestion();
  };

 return (
  <div
    className="container mt-5 p-4"
    style={{
      backgroundColor: isDark ? "rgba(13, 27, 42, 0.9)" : "rgba(255, 255, 255, 0.9)",
      borderRadius: "15px",
      maxWidth: "600px",
      border: `2px solid ${buttonColor}`,
      margin: "0 auto",
    }}
  >
  
    <div
      className="d-flex justify-content-between mb-3"
      style={{ color: isDark ? "white" : "#000" }}
    >
      <span>⏱️ Time: {timeLeft}s</span>
      <span>Score: {score}</span>
      <span>Mistakes: {mistakes}/5</span>
    </div>


    <h3 style={{ color: buttonColor }}>🎨 Color Match</h3>

    <p >
      Click the <strong>actual color</strong> of the word, not what it says.
    </p>

  
    <h1
      style={{
        color: wordColor,
        fontSize: "60px",
        fontWeight: "bold",
        textAlign: "center",
        margin: "30px 0",
      }}
    >
      {word}
    </h1>

 
    <div className="d-flex justify-content-center gap-3">
      {colorNames.map((colorName, index) => (
        <button
          key={colorName}
          className="btn"
          style={{
            backgroundColor: buttonColor,
            color: "white",
            padding: "10px 25px",
            fontSize: "18px",
          }}
          onClick={() => handleAnswer(colorValues[index])}
        >
          {colorName}
        </button>
      ))}
    </div>

  
    <div className="text-center mt-3">
      <button
        className="btn btn-sm"
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={resetGame}
      >
        🔄 Reset
      </button>
    </div>


  </div>
);
}

export default Playy;
