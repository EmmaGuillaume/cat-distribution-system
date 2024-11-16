type GameState = {
  cats: number;
  grannies: number;
  catBars: number;
  trucks: number;
  factories: number;
  researchCenters: number;
};

type GameAction<ReturnT = unknown> = (state: GameState) => ReturnT;

export type { GameAction, GameState };
