import { GameState } from "@/lib/gameState";

const click = (game: GameState): GameState => {
  const newGameState = { ...game };
  newGameState.cats++;
  return newGameState;
};

export { click };
