"use client";
import { useGame } from "@/hooks/useGame";

export default function Home() {
  const { gameState, click, buyGranny } = useGame({
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
        <p>{gameState.cats} cats</p>
        <p>{gameState.grannies} grannies</p>
      </div>
      <button onClick={click} className="px-4 py-2 border rounded-xl">
        Make a cat
      </button>
      <button onClick={buyGranny} className="px-4 py-2 border rounded-xl">
        Buy a granny
      </button>
    </div>
  );
}
