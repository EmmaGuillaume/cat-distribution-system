// sum.test.js
import type { GameState } from "@/domain/game/gameState";
import * as granny from "@/domain/game/granny/granny";
import { iterate } from "@/domain/game/iteration/iteration";
import { describe, expect, test, vi } from "vitest";

const DEFAULT_GAME_STATE: GameState = {
  cats: 1,
  grannies: 0,
  catBars: 0,
  trucks: 0,
  factory: 0,
  researchCenter: 0,
};

describe("buyGranny", () => {
  test(`should make grannies work`, () => {
    // arrange
    const spy = vi.spyOn(granny, "makeGranniesWork");

    //act
    iterate(DEFAULT_GAME_STATE);

    //assert
    expect(spy).toHaveBeenCalledOnce();
  });
});
