import type { GameState } from "@/domain/game/gameState";
import { makeGranniesWork } from "@/domain/game/granny/granny";

const iterate = (gameState: GameState): GameState => {
  return makeGranniesWork(gameState);
};

export { iterate };
