import * as Game from "@/domain/game";
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

  const apply = (action: Game.GameAction) => setGameState(action(gameState));

  const check = (actionChecker: Game.GameActionChecker) =>
    actionChecker(gameState);

  return {
    state: gameState,
    click: () => apply(Game.click),
    buyGranny: () => apply(Game.buyGranny),
    canBuyGranny: check(Game.canBuyGranny),
    buyCatBar: () => apply(Game.buyCatBar),
    canBuyCatBar: check(Game.canBuyCatBar),
    buyTruck: () => apply(Game.buyTruck),
    canBuyTruck: check(Game.canBuyTruck),
    averageCats: () => Game.averageCats(gameState),
  };
};

export { useGame };
