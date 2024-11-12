import * as Game from "@/domain/game";
import { canBuyGranny } from "@/domain/game/granny/granny";
import { useEffect, useState } from "react";

const useGame = (initialGameState: Game.GameState) => {
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameState(Game.iterate(gameState));
    }, 1_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [gameState]);

  return {
    gameState,
    click: () => setGameState(Game.click(gameState)),
    buyGranny: () => setGameState(Game.buyGranny(gameState)),
    canBuyGranny: canBuyGranny(gameState),
  };
};

export { useGame };
