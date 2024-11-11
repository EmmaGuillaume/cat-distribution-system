// sum.test.js
import { GameState } from "@/domain/game/gameState";
import { expect, test } from "vitest";
import { click } from "./click";

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
    result: {
      cats: 2,
      grannies: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
  {
    gameState: {
      cats: 18,
      grannies: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
    result: {
      cats: 19,
      grannies: 0,
      catBars: 0,
      trucks: 0,
      factory: 0,
      researchCenter: 0,
    },
  },
])(
  "click",
  ({ gameState, result }: { gameState: GameState; result: GameState }) => {
    //act
    const nextState = click(gameState);

    //assert
    expect(nextState).toStrictEqual(result);
    expect(nextState).not.toStrictEqual(gameState);
  }
);

//totale des chats = 3
//si on click sur le bouton ajouter un chat
//totale des chats = 4
