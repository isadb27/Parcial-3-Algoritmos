import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";

const ColorSelect: React.FC = () => {
  const [color, setColor] = useState("#000000");
  const setStoreColor = useUserStore(s => s.setColor);
  const navigate = useNavigate();

  const next = () => {
    setStoreColor(color);
    navigate("/game");
  };

  return (
    <div className="container">
      <h2>Elige tu color</h2>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <button onClick={next}>Jugar</button>
    </div>
  );
};

export default ColorSelect;