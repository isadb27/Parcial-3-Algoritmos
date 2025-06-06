import React from "react";

type Props = {
  id: string;
  color?: string;
  letter?: string;
  onClick: () => void;
};

const Cell: React.FC<Props> = ({ id, color, letter, onClick }) => (
  <div
    className="cell"
    style={{ backgroundColor: color || "#fff" }}
    onClick={onClick}
  >
    {letter}
  </div>
);

export default Cell;