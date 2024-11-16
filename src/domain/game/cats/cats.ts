import { catBarsProductionPerSecond } from "@/domain/game/catBar/catBar";
import { GameState } from "@/domain/game/game";
import { granniesProductionPerSecond } from "@/domain/game/granny/granny";
import { truckProductionPerSecond } from "@/domain/game/truck/truck";

const averageCats = (gameState: GameState): number => {
  const catsPerSecond =
    granniesProductionPerSecond(gameState) +
    catBarsProductionPerSecond(gameState) +
    truckProductionPerSecond(gameState) +
    gameState.factory * 150 +
    gameState.researchCenter * 500;
  return catsPerSecond;
};

export { averageCats };
