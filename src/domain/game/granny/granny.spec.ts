// sum.test.js
import {
  buyGranny,
  makeGranniesWork,
  canBuyGranny,
} from "@/domain/game/granny/granny";
import { describe, expect, test } from "vitest";
import { GrannyState } from "@/domain/game/granny/granny";

describe("buyGranny", () => {
  describe.each([
    {
      gameState: {
        cats: 10,
        grannies: 0,
      },
      result: {
        cats: 0,
        grannies: 1,
      },
    },
    {
      gameState: {
        cats: 19,
        grannies: 19,
      },
      result: {
        cats: 9,
        grannies: 20,
      },
    },
  ])(
    "happy path",
    ({
      gameState,
      result,
    }: {
      gameState: GrannyState;
      result: GrannyState;
    }) => {
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
      },
    },
    {
      gameState: {
        cats: 9,
        grannies: 19,
      },
    },
  ])(
    "when not enough cat throw error",
    ({ gameState }: { gameState: GrannyState }) => {
      //act
      expect(() => buyGranny(gameState)).toThrowError("Not enough cats");
    }
  );
});

describe.each([
  {
    gameState: {
      cats: 0,
      grannies: 1,
    },
    result: {
      cats: 1,
      grannies: 1,
    },
  },
  {
    gameState: {
      cats: 0,
      grannies: 4,
    },
    result: {
      cats: 4,
      grannies: 4,
    },
  },
])(
  "grannies production",
  ({ gameState, result }: { gameState: GrannyState; result: GrannyState }) => {
    test(`given ${gameState.grannies} grannies and ${gameState.cats} cats, then next state should have ${result.cats} cats`, () => {
      //act
      const nextState = makeGranniesWork(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
  }
);

describe("canBuyGranny", () => {
  test(`given 10 cats I can buy granny`, () => {
    //act
    const can = canBuyGranny({ cats: 10, grannies: 0 });

    //assert
    expect(can).toStrictEqual(true);
  });

  test(`given more than 10 cats I can buy granny`, () => {
    //act
    const can = canBuyGranny({ cats: 11, grannies: 0 });

    //assert
    expect(can).toStrictEqual(true);
  });

  test(`given less than 10 cats I can't buy granny`, () => {
    //act
    const can = canBuyGranny({ cats: 9, grannies: 0 });

    //assert
    expect(can).toStrictEqual(false);
  });
});
