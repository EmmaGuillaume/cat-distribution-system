import { catBarsProductionPerSecond } from "@/domain/game/catBar/catBar";
import { factoryProductionPerSecond } from "@/domain/game/factory/factory";
import { GameState } from "@/domain/game/game";
import { granniesProductionPerSecond } from "@/domain/game/granny/granny";
import { truckProductionPerSecond } from "@/domain/game/truck/truck";

const averageCats = (gameState: GameState): number =>
  granniesProductionPerSecond(gameState) +
  catBarsProductionPerSecond(gameState) +
  truckProductionPerSecond(gameState) +
  factoryProductionPerSecond(gameState) +
  gameState.researchCenters * 500;

export { averageCats };
