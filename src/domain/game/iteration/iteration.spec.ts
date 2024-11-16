import * as catBar from "@/domain/game/catBar/catBar";
import * as factory from "@/domain/game/factory/factory";
import type { GameState } from "@/domain/game/game";
import * as granny from "@/domain/game/granny/granny";
import { iterate } from "@/domain/game/iteration/iteration";
import * as truck from "@/domain/game/truck/truck";
import { describe, expect, test, vi } from "vitest";

const DEFAULT_GAME_STATE: GameState = {
  cats: 1,
  grannies: 0,
  catBars: 0,
  trucks: 0,
  factories: 0,
  researchCenters: 0,
};

describe("iterate", () => {
  test(`should make grannies work`, () => {
    // arrange
    const spy = vi.spyOn(granny, "makeGranniesWork");

    //act
    iterate(DEFAULT_GAME_STATE);

    //assert
    expect(spy).toHaveBeenCalledOnce();
  });

  test(`should make catbars work`, () => {
    // arrange
    const spy = vi.spyOn(catBar, "makeCatBarsWork");

    //act
    iterate(DEFAULT_GAME_STATE);

    //assert
    expect(spy).toHaveBeenCalledOnce();
  });

  test(`should make trucks work`, () => {
    // arrange
    const spy = vi.spyOn(truck, "makeTrucksWork");

    //act
    iterate(DEFAULT_GAME_STATE);

    //assert
    expect(spy).toHaveBeenCalledOnce();
  });

  test(`should make factories work`, () => {
    // arrange
    const spy = vi.spyOn(factory, "makeFactoriesWork");

    //act
    iterate(DEFAULT_GAME_STATE);

    //assert
    expect(spy).toHaveBeenCalledOnce();
  });
});
