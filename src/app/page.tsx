"use client";
import { TRUCK_PRICE } from "@/domain/game";
import { CATBAR_PRICE } from "@/domain/game/catBar/catBar";
import { GRANNY_PRICE } from "@/domain/game/granny/granny";
import { useGame } from "@/hooks/useGame";

export default function Home() {
  const game = useGame({
    cats: 0,
    grannies: 0,
    catBars: 0,
    trucks: 0,
    factory: 0,
    researchCenter: 0,
  });

  return (
    <div className="h-svh w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl">Cat Distribution System</h1>
      <div>
        <p>
          {game.state.cats} cats - {game.averageCats()} cats/s
        </p>
        <p>{game.state.grannies} grannies</p>
        <p>{game.state.catBars} catBars</p>
        <p>{game.state.trucks} trucks</p>
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
    </div>
  );
}
