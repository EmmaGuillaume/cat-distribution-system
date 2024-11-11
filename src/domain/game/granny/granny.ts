import { GameState } from "@/domain/game/gameState";
const GRANNY_PRICE = 10;

const buyGranny = (gameState: GameState): GameState => {
  const newGameState = { ...gameState };
  if (newGameState.cats < GRANNY_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= GRANNY_PRICE;
  newGameState.grannies++;

  return newGameState;
};

const makeGranniesWork = (gameState: GameState): GameState => {
  const newGameState = { ...gameState };
  newGameState.cats += gameState.grannies;

  return newGameState;
};

export { buyGranny, makeGranniesWork };
