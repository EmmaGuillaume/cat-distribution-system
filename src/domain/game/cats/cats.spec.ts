import { GameState } from "@/domain/game";
import { catsPerIteration } from "@/domain/game/cats/cats";
import { expect, test } from "vitest";

test.each([
  {
    gameState: {
      cats: 0,
      grannies: 1, //1
      catBars: 1, //5
      trucks: 1, //20
      factories: 1, //150
      researchCenters: 1, //500
    },
    result: {
      cats: 676,
      grannies: 1, //1
      catBars: 1, //5
      trucks: 1, //20
      factories: 1, //150
      researchCenters: 1, //500
    },
  },
  {
    gameState: {
      cats: 0,
      grannies: 2,
      catBars: 2,
      trucks: 2,
      factories: 2,
      researchCenters: 2,
    },
    result: {
      cats: 1352,
      grannies: 2,
      catBars: 2,
      trucks: 2,
      factories: 2,
      researchCenters: 2,
    },
  },
])(
  "average cats per second",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    //act
    const nextState = catsPerIteration(gameState);

    expect(nextState).toStrictEqual(result.cats);
    expect(nextState).not.toStrictEqual(gameState);
  }
);
