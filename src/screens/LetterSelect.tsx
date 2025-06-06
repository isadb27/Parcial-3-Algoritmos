import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";

const LetterSelect: React.FC = () => {
  const [letter, setLetter] = useState("");
  const setStoreLetter = useUserStore(s => s.setLetter);
  const navigate = useNavigate();

  const next = () => {
    setStoreLetter(letter);
    navigate("/onboarding/color");
  };

  return (
    <div className="container">
      <h2>Elige tu letra</h2>
      <input maxLength={1} value={letter} onChange={e => setLetter(e.target.value.toUpperCase())} />
      <button onClick={next} disabled={!letter}>Siguiente</button>
    </div>
  );
};

export default LetterSelect;