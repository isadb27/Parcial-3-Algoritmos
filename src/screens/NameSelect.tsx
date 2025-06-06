import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";

const NameSelect: React.FC = () => {
  const [name, setName] = useState("");
  const setStoreName = useUserStore(s => s.setName);
  const navigate = useNavigate();

  const next = () => {
    setStoreName(name);
    navigate("/onboarding/letter");
  };

  return (
    <div className="container">
      <h2>Elige tu nombre</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={next} disabled={!name}>Siguiente</button>
    </div>
  );
};

export default NameSelect;