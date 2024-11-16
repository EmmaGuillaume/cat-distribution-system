import {
  buyResearchCenter,
  canBuyResearchCenter,
  makeResearchCentersWork,
  ResearchCenterState,
} from "@/domain/game/researchCenter/researchCenter";
import { describe, expect, test } from "vitest";

describe("canBuyResearchCenter", () => {
  test(`given 10 000 cats or more I can buy researchCenter`, () => {
    expect(
      canBuyResearchCenter({ cats: 10_000, researchCenters: 0 })
    ).toBeTruthy();
    expect(
      canBuyResearchCenter({ cats: 10_001, researchCenters: 0 })
    ).toBeTruthy();
  });

  test(`given less than 10 000 cats I can't buy researchCenter`, () => {
    expect(
      canBuyResearchCenter({ cats: 9_999, researchCenters: 0 })
    ).toBeFalsy();
  });
});

describe("buyResearchCenter", () => {
  describe.each([
    {
      gameState: {
        cats: 10_000,
        researchCenters: 0,
      },
      result: {
        cats: 0,
        researchCenters: 1,
      },
    },
    {
      gameState: {
        cats: 12_000,
        researchCenters: 19,
      },
      result: {
        cats: 2_000,
        researchCenters: 20,
      },
    },
  ])(
    "happy path",
    ({
      gameState,
      result,
    }: {
      gameState: ResearchCenterState;
      result: ResearchCenterState;
    }) => {
      test(`given ${gameState.cats} cats when buy researchCenter then cats should be ${result.cats}`, () => {
        //act
        const nextState = buyResearchCenter(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
      test(`given ${gameState.researchCenters} researchCenters when buy researchCenter then researchCenters should be ${result.researchCenters}`, () => {
        //act
        const nextState = buyResearchCenter(gameState);

        //assert
        expect(nextState).toStrictEqual(result);
        expect(nextState).not.toStrictEqual(gameState);
      });
    }
  );

  test(`throw error when less than 500 cats`, () => {
    expect(() =>
      buyResearchCenter({
        cats: 9_999,
        researchCenters: 0,
      })
    ).toThrowError("Not enough cats");
  });
});

describe("makeResearchCentersWork", () => {
  // arrange
  test(`given 0 researchCenter and 0 cat, then I should get 0 cats`, () => {
    const initialState = {
      cats: 0,
      researchCenters: 0,
    };

    //act
    const nextState = makeResearchCentersWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 0,
      researchCenters: 0,
    });
  });

  test(`given 1 researchCenter and 0 cat, then I should get 500 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      researchCenters: 1,
    };

    //act
    const nextState = makeResearchCentersWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 500,
      researchCenters: 1,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });

  test(`given 2 researchCenters and 0 cats, then I should get 1000 cats`, () => {
    // arrange
    const initialState = {
      cats: 0,
      researchCenters: 2,
    };

    //act
    const nextState = makeResearchCentersWork(initialState);

    //assert
    expect(nextState).toStrictEqual({
      cats: 1000,
      researchCenters: 2,
    });
    expect(nextState).not.toStrictEqual(initialState);
  });
});
