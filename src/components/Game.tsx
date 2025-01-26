import { BuyConstructionButton } from "@/components/BuyConstructionsButton";
import {
  CATBAR_PRICE,
  FACTORY_PRICE,
  GRANNY_PRICE,
  RESEARCH_CENTER_PRICE,
  TRUCK_PRICE,
} from "@/domain/game";
import { useGame } from "@/hooks/useGame";
import Image from "next/image";

export default function Game() {
  const game = useGame();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between gap-4 bg-pink-50">
      <div className="w-screen bg-slate-200 p-4 flex gap-4">
        <h1 className="text-xl">Cat Distribution System</h1>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <p>{game.state.cats} cats</p>
          <p>{game.catsPerIteration} cats per second</p>
        </div>

        <button
          onClick={game.click}
          className="transform transition-transform duration-200 ease-in-out active:scale-90 "
        >
          <Image
            src="/cats/cat.webp"
            alt="cat"
            width={300}
            height={300}
            className="inline"
          />
        </button>
      </div>

      <div className="w-screen h-56 bg-pink-100 p-4 flex  gap-4 overflow-x-scroll ">
        <BuyConstructionButton
          onClick={game.buyGranny}
          quantity={game.state.grannies}
          price={GRANNY_PRICE}
          title="Granny"
          disabled={!game.canBuyGranny}
          imgName="granny"
        />

        <BuyConstructionButton
          onClick={game.buyCatBar}
          quantity={game.state.catBars}
          price={CATBAR_PRICE}
          title="Cat bar"
          disabled={!game.canBuyCatBar}
          imgName="catBar"
        />
        <BuyConstructionButton
          onClick={game.buyTruck}
          quantity={game.state.trucks}
          price={TRUCK_PRICE}
          title="Truck"
          disabled={!game.canBuyTruck}
          imgName="truck"
        />
        <BuyConstructionButton
          onClick={game.buyFactory}
          quantity={game.state.factories}
          price={FACTORY_PRICE}
          title="Factory"
          disabled={!game.canBuyFactory}
          imgName="factory"
        />
        <BuyConstructionButton
          onClick={game.buyResearchCenter}
          quantity={game.state.researchCenters}
          price={RESEARCH_CENTER_PRICE}
          title="Research center"
          disabled={!game.canBuyResearchCenter}
          imgName="research"
        />
      </div>
    </div>
  );
}
