type GameState = {
  cats: number;
  grannies: number;
  catBars: number;
  trucks: number;
  factory: number;
  researchCenter: number;
};

type GameAction = (state: GameState) => GameState;
type GameActionChecker = (state: GameState) => boolean;

export type { GameAction, GameActionChecker, GameState };
