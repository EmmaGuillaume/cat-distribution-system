import { BuyConstructionButton } from "@/components/BuyConstructionsButton";
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
    <div className="h-screen w-full flex flex-col items-center justify-between gap-4">
      <h1 className="text-xl">Cat Distribution System</h1>
      <div>
        <p>
          {game.state.cats} cats - {game.catsPerIteration} cats/s
        </p>
      </div>

      <div className="w-screen h-80 bg-slate-200 p-4 flex  gap-4 overflow-x-scroll ">
        <BuyConstructionButton
          onClick={game.click}
          quantity={0}
          price={0}
          title="Make a cat"
        />
        <BuyConstructionButton
          onClick={game.buyGranny}
          quantity={game.state.grannies}
          price={GRANNY_PRICE}
          title="Buy a granny"
          disabled={!game.canBuyGranny}
        />

        <BuyConstructionButton
          onClick={game.buyCatBar}
          quantity={game.state.catBars}
          price={CATBAR_PRICE}
          title="Buy a cat bar"
          disabled={!game.canBuyCatBar}
        />
        <BuyConstructionButton
          onClick={game.buyTruck}
          quantity={game.state.trucks}
          price={TRUCK_PRICE}
          title="Buy a truck"
          disabled={!game.canBuyTruck}
        />
        <BuyConstructionButton
          onClick={game.buyFactory}
          quantity={game.state.factories}
          price={FACTORY_PRICE}
          title="Make a factory"
          disabled={!game.canBuyFactory}
        />
        <BuyConstructionButton
          onClick={game.buyResearchCenter}
          quantity={game.state.researchCenters}
          price={RESEARCH_CENTER_PRICE}
          title="Make a research center"
          disabled={!game.canBuyResearchCenter}
        />
      </div>
    </div>
  );
}
