import {
  buyFactory,
  canBuyFactory,
  FactoryState,
  makeFactoriesWork,
} from "@/domain/game/factory/factory";
import { describe, expect, test } from "vitest";

describe("canBuyFactory", () => {
  test(`given 1200 cats or more I can buy factory`, () => {
    expect(canBuyFactory({ cats: 1200, factories: 0 })).toBeTruthy();
    expect(canBuyFactory({ cats: 1201, factories: 0 })).toBeTruthy();
  });

  test(`given less than 1200 cats I can't buy factory`, () => {
    expect(canBuyFactory({ cats: 1199, factories: 0 })).toBeFalsy();
  });
});

describe("buyFactory", () => {
  describe.each([
    {
      gameState: {
        cats: 1200,
        factories: 0,
      },
      result: {
        cats: 0,
        factories: 1,
      },
    },
    {
      gameState: {
        cats: 3100,
        factories: 19,
      },
      result: {
        cats: 1900,
        factories: 20,
      },
    },
  ])(
    "happy path",
    ({
      gameState,
      result,
    }: {
      gameState: FactoryState;
      result: FactoryState;
    }) => {
      test(`given ${gameState.cats} cats when buy factory then cats should be ${result.cats}`, () => {
        //act
        const nextState = buyFactory(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
      test(`given ${gameState.factories} factories when buy factory then factories should be ${result.factories}`, () => {
        //act
        const nextState = buyFactory(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
    }
  );

  test(`throw error when less than 1200 cats`, () => {
    expect(() =>
      buyFactory({
        cats: 1199,
        factories: 0,
      })
    ).toThrowError("Not enough cats");
  });
});

describe("makeFactoriesWork", () => {
  // arrange
  test(`given 0 factory and 0 cat, then I should get 0 cats`, () => {
    const initialState = {
      cats: 0,
      factories: 0,
    };

    //act
    const nextState = makeFactoriesWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 0,
      factories: 0,
    });
  });

  test(`given 1 factory and 0 cat, then I should get 150 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      factories: 1,
    };

    //act
    const nextState = makeFactoriesWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 150,
      factories: 1,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });

  test(`given 2 factories and 0 cats, then I should get 300 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      factories: 2,
    };

    //act
    const nextState = makeFactoriesWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 300,
      factories: 2,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });
});
