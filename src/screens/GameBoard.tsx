import React, { useEffect } from "react";
import { useBoardStore } from "../stores/useBoardStore";
import { useUserStore } from "../stores/useUserStore";
import Cell from "../components/Cell";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const SIZE = 50; 

const GameBoard: React.FC = () => {
  const { cells, claimCell } = useBoardStore();
  const { letter, color } = useUserStore();

  const handleClick = (x: number, y: number) => {
    const id = `${x}-${y}`;
    claimCell(id, color, letter);
  };

  return (
    <div>
      <button onClick={() => signOut(auth)}>Salir</button>
      <div className="board">
        {Array.from({ length: SIZE }).map((_, x) => (
          <div className="row" key={x}>
            {Array.from({ length: SIZE }).map((_, y) => {
              const id = `${x}-${y}`;
              const cell = cells[id];
              return (
                <Cell
                  key={id}
                  id={id}
                  color={cell?.color}
                  letter={cell?.letter}
                  onClick={() => handleClick(x, y)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;