// sum.test.js
import {
  buyCatBar,
  canBuyCatBar,
  CatBarState,
  makeCatBarsWork,
} from "@/domain/game/catBar/catBar";
import { describe, expect, test } from "vitest";

describe("buyCatBar", () => {
  describe.each([
    {
      gameState: {
        cats: 100,
        catBars: 0,
      },
      result: {
        cats: 0,
        catBars: 1,
      },
    },
    {
      gameState: {
        cats: 1200,
        catBars: 19,
      },
      result: {
        cats: 1100,
        catBars: 20,
      },
    },
  ])(
    "happy path",
    ({
      gameState,
      result,
    }: {
      gameState: CatBarState;
      result: CatBarState;
    }) => {
      test(`given ${gameState.cats} cats when buy catBar then cats should be ${result.cats}`, () => {
        //act
        const nextState = buyCatBar(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
      test(`given ${gameState.catBars} catBars when buy catBar then catBars should be ${result.catBars}`, () => {
        //act
        const nextState = buyCatBar(gameState);

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
        catBars: 0,
      },
    },
    {
      gameState: {
        cats: 99,
        catBars: 19,
      },
    },
  ])(
    "when not enough cat throw error",
    ({ gameState }: { gameState: CatBarState }) => {
      //act
      expect(() => buyCatBar(gameState)).toThrowError("Not enough cats");
    }
  );
});

describe.each([
  {
    gameState: {
      cats: 0,
      catBars: 1,
    },
    result: {
      cats: 5,
      catBars: 1,
    },
  },
  {
    gameState: {
      cats: 102,
      catBars: 4,
    },
    result: {
      cats: 122,
      catBars: 4,
    },
  },
])(
  "makeCatBarsWork",
  ({ gameState, result }: { gameState: CatBarState; result: CatBarState }) => {
    test(`given ${gameState.catBars} catBars and ${gameState.cats} cats, then next state should have ${result.cats} cats`, () => {
      //act
      const nextState = makeCatBarsWork(gameState);

      //assert
      expect(nextState).toStrictEqual(result);
      expect(nextState).not.toStrictEqual(gameState);
    });
  }
);

describe("canBuyCatBar", () => {
  test(`given 100 cats I can buy catBar`, () => {
    //act
    const can = canBuyCatBar({ cats: 100, catBars: 0 });

    //assert
    expect(can).toStrictEqual(true);
  });

  test(`given more than 100 cats I can buy catBar`, () => {
    //act
    const can = canBuyCatBar({ cats: 112, catBars: 0 });

    //assert
    expect(can).toStrictEqual(true);
  });

  test(`given less than 10 cats I can't buy catBar`, () => {
    //act
    const can = canBuyCatBar({ cats: 94, catBars: 0 });

    //assert
    expect(can).toStrictEqual(false);
  });
});
