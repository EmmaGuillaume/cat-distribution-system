import {
  CATBAR_PRICE,
  FACTORY_PRICE,
  GRANNY_PRICE,
  RESEARCH_CENTER_PRICE,
  TRUCK_PRICE,
} from "@/domain/game";
import { useGame } from "@/hooks/useGame";

export default function Game() {
  const game = useGame();

  return (
    <div className="h-svh w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl">Cat Distribution System</h1>
      <div>
        <p>
          {game.state.cats} cats - {game.catsPerIteration} cats/s
        </p>
        <p>{game.state.grannies} grannies</p>
        <p>{game.state.catBars} catBars</p>
        <p>{game.state.trucks} trucks</p>
        <p>{game.state.factories} factories</p>
        <p>{game.state.researchCenters} research centers</p>
      </div>
      <button onClick={game.click} className="px-4 py-2 border rounded-xl">
        Make a cat - free
      </button>
      <button
        disabled={!game.canBuyGranny}
        onClick={game.buyGranny}
        className="px-4 py-2 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy a granny - {GRANNY_PRICE} cats
      </button>

      <button
        disabled={!game.canBuyCatBar}
        onClick={game.buyCatBar}
        className="px-4 py-2 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy a cat bar - {CATBAR_PRICE} cats
      </button>

      <button
        disabled={!game.canBuyTruck}
        onClick={game.buyTruck}
        className="px-4 py-2 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy a truck - {TRUCK_PRICE} cats
      </button>

      <button
        disabled={!game.canBuyFactory}
        onClick={game.buyFactory}
        className="px-4 py-2 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy a factory - {FACTORY_PRICE} cats
      </button>

      <button
        disabled={!game.canBuyResearchCenter}
        onClick={game.buyResearchCenter}
        className="px-4 py-2 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy a research center - {RESEARCH_CENTER_PRICE} cats
      </button>
    </div>
  );
}
