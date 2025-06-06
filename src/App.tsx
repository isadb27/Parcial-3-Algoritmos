import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebase";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NameSelect from "./screens/NameSelect";
import LetterSelect from "./screens/LetterSelect";
import ColorSelect from "./screens/ColorSelect";
import GameBoard from "./screens/GameBoard";

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <div>Cargando...</div>;

  if (!user) return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>;

  return <Routes>
    <Route path="/onboarding/name" element={<NameSelect />} />
    <Route path="/onboarding/letter" element={<LetterSelect />} />
    <Route path="/onboarding/color" element={<ColorSelect />} />
    <Route path="/game" element={<GameBoard />} />
    <Route path="*" element={<Navigate to="/onboarding/name" />} />
  </Routes>;
};

export default App;