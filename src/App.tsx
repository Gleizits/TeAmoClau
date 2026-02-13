import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ñop",
      "de vdd?",
      "segura?",
      "no es mutuo",
      "chi?",
      "d vrd estas segura?",
      "oño",
      "d vdd ya fue",
      "segura?",
      "yop pipipi",
      "pipipi",
      "chi?",
      "👺👺👺",
      "ya fue",
      "d vdd?",
      "no es reciproco",
      "ño🥺",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              src="https://www.gifcen.com/wp-content/uploads/2024/03/pochacco-gif-7.gif"
              alt="Cute animated illustration"
            />
            <div className="text-container">👅👅👅!!! TE AMO MUTO MUTO!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://i.gifer.com/Pak.gif"
            />
            <h1 className="text-container">
              ¿quieres ser mi san valentin again? 🥺🥺🥺
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Chi
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
