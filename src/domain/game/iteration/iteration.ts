import { makeCatBarsWork } from "@/domain/game/catBar/catBar";
// import { averageCats } from "@/domain/game/cats/cats";
import type { GameState } from "@/domain/game/game";
import { makeGranniesWork } from "@/domain/game/granny/granny";
import { makeTrucksWork } from "@/domain/game/truck/truck";

const iterate = (gameState: GameState): GameState => {
  return makeGranniesWork(makeCatBarsWork(makeTrucksWork(gameState)));
};

export { iterate };
