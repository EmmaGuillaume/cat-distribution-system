import * as Game from "@/domain/game";
import { INITIAL_GAME_STATE } from "@/domain/game";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const useGame = () => {
  const [gameState, setGameState] = useLocalStorage<Game.GameState>(
    "cat_distribution_system.game_state",
    { ...INITIAL_GAME_STATE }
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameState(Game.iterate(gameState));
    }, 1_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [gameState, setGameState]);

  const apply = (fn: Game.GameAction<Game.GameState>) =>
    setGameState(fn(gameState));

  const compute = <T>(fn: Game.GameAction<T>) => fn(gameState);

  return {
    state: gameState,
    click: () => apply(Game.click),
    canBuyGranny: compute(Game.canBuyGranny),
    buyGranny: () => apply(Game.buyGranny),
    canBuyCatBar: compute(Game.canBuyCatBar),
    buyCatBar: () => apply(Game.buyCatBar),
    canBuyTruck: compute(Game.canBuyTruck),
    buyTruck: () => apply(Game.buyTruck),
    canBuyFactory: compute(Game.canBuyFactory),
    buyFactory: () => apply(Game.buyFactory),
    canBuyResearchCenter: compute(Game.canBuyResearchCenter),
    buyResearchCenter: () => apply(Game.buyResearchCenter),
    catsPerIteration: compute(Game.catsPerIteration),
  };
};

export { useGame };
