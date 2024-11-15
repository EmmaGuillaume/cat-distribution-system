import {
  buyTruck,
  canBuyTruck,
  makeTrucksWork,
  TruckState,
} from "@/domain/game/truck/truck";
import { describe, expect, test } from "vitest";

describe("canBuyTruck", () => {
  test(`given 500 cats or more I can buy truck`, () => {
    expect(canBuyTruck({ cats: 500, trucks: 0 })).toBeTruthy();
    expect(canBuyTruck({ cats: 501, trucks: 0 })).toBeTruthy();
  });

  test(`given less than 500 cats I can't buy truck`, () => {
    expect(canBuyTruck({ cats: 499, trucks: 0 })).toBeFalsy();
  });
});

describe("buyTruck", () => {
  describe.each([
    {
      gameState: {
        cats: 500,
        trucks: 0,
      },
      result: {
        cats: 0,
        trucks: 1,
      },
    },
    {
      gameState: {
        cats: 1200,
        trucks: 19,
      },
      result: {
        cats: 700,
        trucks: 20,
      },
    },
  ])(
    "happy path",
    ({ gameState, result }: { gameState: TruckState; result: TruckState }) => {
      test(`given ${gameState.cats} cats when buy truck then cats should be ${result.cats}`, () => {
        //act
        const nextState = buyTruck(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
      test(`given ${gameState.trucks} trucks when buy truck then trucks should be ${result.trucks}`, () => {
        //act
        const nextState = buyTruck(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
    }
  );

  test(`throw error when less than 500 cats`, () => {
    expect(() =>
      buyTruck({
        cats: 499,
        trucks: 0,
      })
    ).toThrowError("Not enough cats");
  });
});

describe("makeTrucksWork", () => {
  // arrange
  test(`given 0 truck and 0 cat, then I should get 0 cats`, () => {
    const initialState = {
      cats: 0,
      trucks: 0,
    };

    //act
    const nextState = makeTrucksWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 0,
      trucks: 0,
    });
  });

  test(`given 1 truck and 0 cat, then I should get 20 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      trucks: 1,
    };

    //act
    const nextState = makeTrucksWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 20,
      trucks: 1,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });

  test(`given 2 trucks and 0 cats, then I should get 40 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      trucks: 2,
    };

    //act
    const nextState = makeTrucksWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 40,
      trucks: 2,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });
});
