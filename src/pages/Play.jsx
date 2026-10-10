import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  

import Playy from "./playy";
function Play({ isDark, buttonColor }) {
    // عشان ينتقل على صفحة Leaderboard بعد انتهاء اللعبة
  const navigate = useNavigate();  

  //عشان  يحدد الصوبه اذا  normal واذا hard واذا easy حسب الي رح دخلهنا 
  const [difficulty] = useState(() => {
    return localStorage.getItem("difficulty") || "normal";
  });


  const emojis = ["🐳", "🔥", "🌸", "🌹", "⭐", "🌿", "🎈", "🍀"];

  // هي شرط عشان يحدد عدد الكروت حسب الصوبه الي رح يختارها اللاعب
  const getCardCount = () => {
    if (difficulty === "easy") return 4;
    if (difficulty === "normal") return 6;
    if (difficulty === "hard") return 8;
    return 6;
  };
// هي رح تحفظ عدد كروت حسب صعوبه
  const cardCount = getCardCount();
//    هي رح تختار  الكروت الايموج حسب بداي ونهاي تبعا للي رح يختارها اللاعب
  const cards = emojis.slice(0, cardCount);

// هي الكروت الي رح تضيئ متل 2و4و1  وهكذا رح تقارن اللاعب اذا ضغط على نفس الكرت الي ضوي او لا
  const [sequence, setSequence] = useState([]);
// هي رح تتخزن تسلسل الضغطات التي يقوم بها اللاعب
  const [userSequence, setUserSequence] = useState([]);
//   كرت المضيئ حاليا 
  const [activeCard, setActiveCard] = useState(null);
//   حالة اللعبة وهل كرت يضيئ  تعمل مع اضاءة
  const [isPlaying, setIsPlaying] = useState(false);
//   هل يمكن النقر
  const [canClick, setCanClick] = useState(false);
//   مستوى اللعبة
  const [level, setLevel] = useState(1);
//   النقاط
  const [score, setScore] = useState(0);
//   رسالة للاعبذ
  const [message, setMessage] = useState("");

  // وقت اللعبه العداد
  const [gameTime, setGameTime] = useState(60);

//   حالة نهاية اللعبة
  const [gameOver, setGameOver] = useState(false);

  // المستوى الحالي يحدد طول التسلسل
  const getSequenceLength = () => {
    return Math.min(level + 2, cards.length);
  };

  // حفظ النتيجة في LocalStorage
  const saveScore = () => {
    const savedScores = JSON.parse(localStorage.getItem("scores") || "[]");
    // كان هذا الكائن يحتوي على معلومات النتيجة التي سيتم حفظها
    const newScore = {
        // حفظ الاسم
      name: localStorage.getItem("name") || "Guest",
    //  نطاق
      score: score,
    //   \ صعوبه
      difficulty: difficulty,
    //   وقت
      date: new Date().toLocaleString("ar-EG"),
    };
    savedScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(savedScores));
  };

  // بدء اللعبة
  const startGame = () => {
    const newSequence = [];

    const sequenceLength = getSequenceLength();

    for (let i = 0; i < sequenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      newSequence.push(randomIndex);
    }

    
    setSequence(newSequence);
    setUserSequence([]);
    setActiveCard(null);
    setIsPlaying(true);
    setCanClick(false);
    setMessage("");
  };

  //عرض كل كرت في التسلسل واحد تلو الآخر
  useEffect(() => {
    if (!isPlaying || sequence.length === 0) return;

    // سرعه اضاءة الكرت حسب المستوى
    const speed = Math.max(1000 - (level - 1) * 100, 400);
    let index = 0;

    const interval = setInterval(() => {
      setActiveCard(sequence[index]);

      setTimeout(() => {
        setActiveCard(null);
      }, speed * 0.5);

      index++;

      if (index >= sequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveCard(null);
          setIsPlaying(false);
          setCanClick(true);
        }, 700);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, sequence, level]);


  // عند انتهاء الوقت أو عند الضغط على كرت خاطئ، يتم إنهاء اللعبة وحفظ النتيجة
  useEffect(() => {
    if (gameOver) return;

    if (gameTime <= 0) {
      setGameOver(true);
      saveScore(); 
    
      setTimeout(() => navigate("/leaderboard"), 2000);  
     
      return;
    }

    const timer = setTimeout(() => {
      setGameTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameTime, gameOver, navigate]);




  // عند الضغط على كرت
  const handleCardClick = (index) => {
    if (!canClick || gameOver) return;

    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    const currentPosition = newUserSequence.length - 1;

    if (index !== sequence[currentPosition]) {
      setCanClick(false);
      setMessage("❌ Wrong sequence!");
      setGameOver(true);
      saveScore();   // ← احفظ
      setTimeout(() => navigate("/leaderboard"), 2000);
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setCanClick(false);
      setScore((prev) => prev + 10 * level);
      setMessage("✅ Correct!");
      setLevel((prev) => prev + 1);
    }
  };

  // اعادة اللعبة
  const resetGame = () => {
    setSequence([]);
    setUserSequence([]);
    setActiveCard(null);
    setIsPlaying(false);
    setCanClick(false);
    setLevel(1);
    setScore(0);
    setMessage("");
    setGameTime(60);
    setGameOver(false);
  };


//   واجهة اللعبة
  return (
    <div className="container mt-5">
        
      <h1 style={{ color: buttonColor }}>🎮 Color Memory Master</h1>

    
      <h4 style={{ color: gameTime <= 10 ? "red" : buttonColor }}>
        ⏱️ Time: {gameTime}s
      </h4>

      <p style={{ color: isDark ? "white" : "#000" }}>
        Level: <strong>{level}</strong> | Score: <strong>{score}</strong>
      </p>

      <p style={{ color: isDark ? "white" : "#000" }}>
        Difficulty: <strong>{difficulty}</strong> | Cards: <strong>{cardCount}</strong>
      </p>

      {message && (
        <h4 style={{ color: message.includes("Correct") ? "green" : "red" }}>
          {message}
        </h4>
      )}

      {!isPlaying && !canClick && !gameOver && (
        <button
          className="btn mb-3 me-2"
          style={{ backgroundColor: buttonColor, color: "white" }}
          onClick={startGame}
        >
          ▶️ Start Game
        </button>
      )}

      <button className="btn btn-secondary mb-3" onClick={resetGame}>
        🔄 Reset
      </button>

     
      <div
        className="d-flex gap-3 flex-wrap"
        style={{ justifyContent: "center", marginTop: "20px" }}
      >
        {cards.map((emoji, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor:
                activeCard === index
                  ? buttonColor
                  : isDark
                  ? "#0d1b2a"
                  : "#ffffff",
              border: `2px solid ${buttonColor}`,
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              cursor: canClick ? "pointer" : "default",
              userSelect: "none",
              transition: "all 0.3s",
              transform: activeCard === index ? "scale(1.1)" : "scale(1)",
              boxShadow: activeCard === index ? `0 0 20px ${buttonColor}` : "none",
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      
<div style={{ marginTop: "40px" }}>
  <Playy isDark={isDark} buttonColor={buttonColor} />
</div>
     
     
    </div>
  );
}

export default Play;