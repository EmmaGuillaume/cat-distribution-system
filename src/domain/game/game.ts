import { z } from "zod";

export const GameStateSchema = z.object({
  cats: z.number(),
  grannies: z.number(),
  catBars: z.number(),
  trucks: z.number(),
  factories: z.number(),
  researchCenters: z.number(),
});
export type GameState = z.infer<typeof GameStateSchema>;

export const INITIAL_GAME_STATE = Object.freeze({
  cats: 0,
  grannies: 0,
  catBars: 0,
  trucks: 0,
  factories: 0,
  researchCenters: 0,
});

export type GameAction<ReturnT = unknown> = (state: GameState) => ReturnT;
