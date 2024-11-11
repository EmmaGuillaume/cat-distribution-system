import { GameState } from "@/domain/game/gameState";

const click = (game: GameState): GameState => {
  const newGameState = { ...game };
  newGameState.cats++;
  return newGameState;
};

export { click };
