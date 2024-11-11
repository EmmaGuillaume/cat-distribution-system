// sum.test.js
import { GameState } from "@/domain/game/gameState";
import { buyGranny, makeGranniesWork } from "@/domain/game/granny/granny";
import { describe, expect, test } from "vitest";

describe.each([
  {
    gameState: {
      cats: 10,
      grannies: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 0,
      grannies: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 19,
      grannies: 19,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 9,
      grannies: 20,
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
    test(`given ${gameState.grannies} grannies when buy granny then grannies should be ${result.grannies}`, () => {
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
      grannies: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 9,
      grannies: 19,
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
      grannies: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 1,
      grannies: 1,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 0,
      grannies: 4,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 4,
      grannies: 4,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
])(
  "grannies production",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    test(`given ${gameState.cats} grannies and ${gameState.cats} cats, then next state should have ${result.cats} cats`, () => {
      //act
      const nextState = makeGranniesWork(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
  }
);