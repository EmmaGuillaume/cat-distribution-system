// sum.test.js
import { expect, test } from "vitest";
import { describe } from "vitest";
import { GameState } from "@/lib/gameState";
import { buyGranny } from "@/lib/granny/grannys";

describe.each([
  {
    gameState: {
      cats: 10,
      grannys: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 0,
      grannys: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 19,
      grannys: 19,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 9,
      grannys: 20,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
])(
  "buyGranny",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    test(`given ${gameState.cats} cats when buy granny then cats should be ${result.cats}`, () => {
      //act
      const nextState = buyGranny(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
    test(`given ${gameState.grannys} grannys when buy granny then grannys should be ${result.grannys}`, () => {
      //act
      const nextState = buyGranny(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
  }
);

test.each([
  {
    gameState: {
      cats: 1,
      grannys: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 9,
      grannys: 19,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
])(
  "when not enough cat throw error",
  ({ gameState }: { gameState: GameState }) => {
    //act
    expect(() => buyGranny(gameState)).toThrowError("Not enough cats");
  }
);

describe.each([
  {
    gameState: {
      cats: 0,
      grannys: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 1,
      grannys: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 19,
      grannys: 19,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 20,
      grannys: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
])(
  "grannys production",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    test(`given ${gameState.cats} grannys when granny exist then cats should be ${result.cats}`, () => {
      //act
      const nextState = buyGranny(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
    test(`given ${gameState.grannys} grannys when buy granny then grannys should be ${result.grannys}`, () => {
      //act
      const nextState = buyGranny(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
  }
);
