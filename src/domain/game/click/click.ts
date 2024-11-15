import { GameState } from "@/domain/game/game";

const click = (game: GameState): GameState => {
  const newGameState = { ...game };
  newGameState.cats++;
  return newGameState;
};

export { click };
