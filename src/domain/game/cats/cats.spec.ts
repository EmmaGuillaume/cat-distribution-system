import { averageCats } from "@/domain/game/cats/cats";
import { expect, test } from "vitest";
import { GameState } from "@/domain/game";

// describe("make average cats per second", () => {
//   test(``, () => {
//     expect(canBuyTruck({ cats: 500, trucks: 0 })).toBeTruthy();

//   });

//   test(`given less than 500 cats I can't buy truck`, () => {
//     expect(canBuyTruck({ cats: 499, trucks: 0 })).toBeFalsy();
//   });
// });

test.each([
  {
    gameState: {
      cats: 0,
      grannies: 1, //1
      catBars: 1, //5
      trucks: 1, //20
      factory: 1, //150
      researchCenter: 1, //500
    },
    result: {
      cats: 676,
      grannies: 1, //1
      catBars: 1, //5
      trucks: 1, //20
      factory: 1, //150
      researchCenter: 1, //500
    },
  },
  {
    gameState: {
      cats: 0,
      grannies: 2,
      catBars: 2,
      trucks: 2,
      factory: 2,
      researchCenter: 2,
    },
    result: {
      cats: 1352,
      grannies: 2,
      catBars: 2,
      trucks: 2,
      factory: 2,
      researchCenter: 2,
    },
  },
])(
  "average cats per second",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    //act
    const nextState = averageCats(gameState);

    expect(nextState).toStrictEqual(result.cats);
    expect(nextState).not.toStrictEqual(gameState);
  }
);
