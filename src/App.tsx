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
      "de vrd?",
      "segura?",
      "no es mutuo",
      "chi?",
      "d vrd estas segura?",
      "oño",
      "d vrd ya fue",
      "segura?",
      "yop pipipi",
      "pipipi",
      "chi?",
      "👺👺👺",
      "ya fue",
      "d vrd?",
      "no es reciproco",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://i.gifer.com/Pak.gif" alt="Cute animated illustration" />
            <div className="text-container">yay!!! TE AMO MUTO MUTO!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://64.media.tumblr.com/44437aaa3af65ef5b5dc25b2cf1e81d1/6acc7d78ea83e207-45/s400x600/5b30035952803850ed3136fbe760ceff97ee8d19.gif"
            />
            <h1 className="text-container">quieres ser mi san valentin? 🥺🥺🥺</h1>
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
