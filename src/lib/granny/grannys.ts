import { GameState } from "@/lib/gameState";
const GRANNY_PRICE = 10;

const buyGranny = (gameState: GameState): GameState => {
  const newGameState = { ...gameState };
  if (newGameState.cats < GRANNY_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= GRANNY_PRICE;
  newGameState.grannys++;

  return newGameState;
};

export { buyGranny };
