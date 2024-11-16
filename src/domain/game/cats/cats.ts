import { catBarsPerIteration } from "@/domain/game/catBar/catBar";
import { factoriesPerIteration } from "@/domain/game/factory/factory";
import { GameState } from "@/domain/game/game";
import { granniesPerIteration } from "@/domain/game/granny/granny";
import { researchCentersPerIteration } from "@/domain/game/researchCenter/researchCenter";
import { trucksPerIteration } from "@/domain/game/truck/truck";

const catsPerIteration = (gameState: GameState): number =>
  granniesPerIteration(gameState) +
  catBarsPerIteration(gameState) +
  trucksPerIteration(gameState) +
  factoriesPerIteration(gameState) +
  researchCentersPerIteration(gameState);

export { catsPerIteration };
